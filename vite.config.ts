import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { copyFileSync, mkdirSync, readdirSync, statSync } from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Plugin para copiar archivos de public
function copyPublicPlugin() {
  return {
    name: 'copy-public-files',
    closeBundle() {
      const publicDir = path.resolve(import.meta.dirname, 'client/public');
      const outDir = path.resolve(import.meta.dirname, 'dist/public');
      
      function copyRecursive(src: string, dest: string) {
        try {
          const stats = statSync(src);
          
          if (stats.isDirectory()) {
            mkdirSync(dest, { recursive: true });
            const files = readdirSync(src);
            
            for (const file of files) {
              copyRecursive(
                path.join(src, file),
                path.join(dest, file)
              );
            }
          } else {
            mkdirSync(path.dirname(dest), { recursive: true });
            copyFileSync(src, dest);
            console.log(`✓ Copied: ${path.relative(publicDir, src)}`);
          }
        } catch (error) {
          console.error(`✗ Error copying ${src}:`, error);
        }
      }
      
      console.log('\n📁 Copying public files to dist/public...');
      copyRecursive(publicDir, outDir);
      console.log('✅ All public files copied successfully!\n');
    }
  };
}

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    copyPublicPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
