import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, company, service, message } = req.body;
      
      // Validate required fields
      if (!firstName || !lastName || !email || !company || !message) {
        return res.status(400).json({ 
          message: "All fields are required" 
        });
      }

      // In a real application, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Integrate with CRM
      
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        company,
        service,
        message,
        timestamp: new Date().toISOString()
      });

      res.status(200).json({ 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  });

  // CV download endpoint
  app.get("/api/download-cv", (req, res) => {
    try {
      const lang = req.query.lang as string || 'es';
      const fileName = lang === 'en' ? 'MAURICIO_URIBE_CV_EN.docx' : 'MAURICIO_URIBE_CV_ES.docx';
      
      // Multiple possible paths for the CV file
      const possiblePaths = [
        // Production paths (cPanel) - most likely locations
        path.resolve(process.cwd(), fileName), // Root of working directory
        path.resolve("./", fileName), // Current directory
        path.resolve(__dirname, fileName), // Same directory as server
        path.resolve(__dirname, "..", fileName), // Parent directory
        // In case it's in public folder
        path.resolve(__dirname, "public", fileName),
        path.resolve(process.cwd(), "public", fileName),
        // Development paths
        path.resolve(__dirname, "..", "client", "public", fileName),
        // Additional locations
        path.resolve(__dirname, "..", "..", fileName)
      ];
      
      let cvPath: string | null = null;
      
      // Log current working directory and __dirname for debugging
      console.log("Current working directory:", process.cwd());
      console.log("__dirname:", __dirname);
      console.log(`Searching for CV file: ${fileName} (language: ${lang})...`);
      
      // Find the first existing file
      for (const possiblePath of possiblePaths) {
        console.log("Checking path:", possiblePath);
        if (fs.existsSync(possiblePath)) {
          cvPath = possiblePath;
          console.log("✅ CV file found at:", cvPath);
          break;
        } else {
          console.log("❌ Not found at:", possiblePath);
        }
      }
      
      // If no file found, try fallback to original file
      if (!cvPath) {
        console.log("❌ Language-specific CV not found, trying fallback...");
        const fallbackPaths = possiblePaths.map(p => p.replace(fileName, "MAURICIO_URIBE_CV.docx"));
        
        for (const possiblePath of fallbackPaths) {
          console.log("Checking fallback path:", possiblePath);
          if (fs.existsSync(possiblePath)) {
            cvPath = possiblePath;
            console.log("✅ Fallback CV file found at:", cvPath);
            break;
          }
        }
      }
      
      // If still no file found, log all attempted paths and return error
      if (!cvPath) {
        console.error("❌ CV file not found in any location!");
        console.error("Attempted paths:");
        possiblePaths.forEach((p, index) => console.error(`${index + 1}. ${p}`));
        
        // List actual files in current directory for debugging
        try {
          const files = fs.readdirSync(process.cwd());
          console.log("Files in current working directory:", files);
        } catch (e) {
          console.log("Could not read current directory:", e);
        }
        
        return res.status(404).json({ 
          message: "CV file not found",
          searchedPaths: possiblePaths,
          currentDir: process.cwd()
        });
      }
      
      // Get file stats for logging
      const stats = fs.statSync(cvPath);
      console.log(`File size: ${stats.size} bytes`);
      
      // Set headers for file download
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
      res.setHeader('Content-Length', stats.size.toString());
      
      // Send the file
      res.sendFile(cvPath, (err) => {
        if (err) {
          console.error("Error sending file:", err);
          if (!res.headersSent) {
            res.status(500).json({ message: "Error sending file" });
          }
        } else {
          console.log("✅ File sent successfully:", cvPath);
        }
      });
      
    } catch (error) {
      console.error("CV download error:", error);   
      if (!res.headersSent) {
        res.status(500).json({ 
          message: "Failed to download CV",
          error: error instanceof Error ? error.message : String(error)
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
