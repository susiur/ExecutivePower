import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

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
      // In a real application, you would serve an actual PDF file
      // For now, we'll create a simple text response that triggers download
      const cvContent = `
EXECUTIVE LEADERSHIP - CURRICULUM VITAE

Contact Information:
Email: executive@leadership.com
Phone: +1 (555) 123-4567
LinkedIn: linkedin.com/in/executive-leader

Professional Summary:
Seasoned C-Level executive with over 20 years of transformational leadership 
experience across emerging markets and digital transformation initiatives.

Key Achievements:

IPSOS VENEZUELA (2003-2006)
- Led complete market entry strategy and operational build-out
- Grew revenue from $0 to $3M over 3 years
- Established local partnerships and built high-performing team

VIRTUAL IMPACT (2020-2022)
- Transformed digital-first organization through strategic pivots
- Achieved 9x growth through technology integration and market expansion
- Implemented data-driven decision making and agile methodologies

Core Competencies:
- Strategic Planning & Execution
- Market Entry & Expansion
- Team Leadership & Development
- Operational Transformation
- Digital Transformation
- Performance Optimization

Education:
- Advanced degrees in Business Administration and Strategic Management
- Executive leadership certifications from top business schools

Languages:
- English (Native)
- Spanish (Fluent)
- Portuguese (Conversational)
      `.trim();

      res.setHeader('Content-Type', 'application/octet-stream');
      res.setHeader('Content-Disposition', 'attachment; filename="Executive_CV.txt"');
      res.send(cvContent);
    } catch (error) {
      console.error("CV download error:", error);   
      res.status(500).json({ 
        message: "Failed to download CV" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
