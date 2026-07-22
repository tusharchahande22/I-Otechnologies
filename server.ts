import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check route
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", company: "I&O Technologies", timestamp: new Date().toISOString() });
  });

  // AI Project Scope & Architecture Estimator API
  app.post("/api/ai-scope", async (req, res) => {
    try {
      const { projectType, features, timeline, budget, goals } = req.body;

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback structured response if key is missing
        return res.json({
          summary: `High-performance ${projectType || 'custom software'} solution tailored for rapid scaling and enterprise compliance.`,
          techStack: ["React / Next.js", "TypeScript", "Node.js", "Python / FastAPI", "PostgreSQL", "Docker", "AWS / Cloudflare"],
          architecture: "Serverless microservices with event-driven AI pipelines and edge distribution.",
          estimatedPhases: [
            { phase: "Discovery & Blueprinting", duration: "1-2 Weeks" },
            { phase: "Core Development & AI Integration", duration: "4-6 Weeks" },
            { phase: "Security Hardening & QA", duration: "1-2 Weeks" },
            { phase: "Deployment & Scaling", duration: "Ongoing" }
          ],
          aiRecommendations: [
            "Integrate automated LLM query routing to reduce API latency",
            "Implement vector embeddings (pgvector) for instant semantic search",
            "Set up CI/CD pipelines with automated regression test suites"
          ]
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are the Lead Solutions Architect at I&O Technologies (Inovance and Optivance). 
Provide a high-level executive project blueprint for a potential client requesting:
- Project Type: ${projectType || 'Custom AI & Software Application'}
- Requested Features: ${Array.isArray(features) ? features.join(', ') : (features || 'AI Automation, Scalable API, Analytics')}
- Expected Timeline: ${timeline || 'Flexible'}
- Target Budget Range: ${budget || 'Flexible'}
- Core Business Goals: ${goals || 'Increase operational speed and scale digital infrastructure'}

Return ONLY a valid JSON object matching this structure:
{
  "summary": "2-3 concise, high-impact executive summary sentences",
  "techStack": ["4-6 recommended modern tech stack items"],
  "architecture": "1-2 sentence description of suggested cloud architecture",
  "estimatedPhases": [
    { "phase": "Phase Name", "duration": "Duration e.g. 2 Weeks" }
  ],
  "aiRecommendations": [
    "3 specific AI/automation high-value suggestions"
  ]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
        }
      });

      const responseText = response.text || "";
      let parsed = {};
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = {
          summary: responseText,
          techStack: ["Next.js", "Python", "OpenAI", "Cloudflare"],
          architecture: "Microservices with distributed AI caching.",
          estimatedPhases: [
            { phase: "Phase 1: Architecture Design", duration: "2 Weeks" },
            { phase: "Phase 2: Core Engineering", duration: "4 Weeks" }
          ],
          aiRecommendations: ["Implement real-time streaming AI responses", "Cache frequent LLM outputs in Redis"]
        };
      }

      return res.json(parsed);
    } catch (error: any) {
      console.error("AI Scope Endpoint Error:", error);
      return res.status(500).json({ 
        error: "Failed to generate AI blueprint", 
        message: error?.message || "Internal server error" 
      });
    }
  });

  // Vite middleware in dev mode vs Static serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`I&O Technologies server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
