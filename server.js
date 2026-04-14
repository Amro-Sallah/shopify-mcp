import { createServer } from "@modelcontextprotocol/sdk/server/index.js";
import express from "express";

const app = express();
app.use(express.json());

const server = createServer({
  name: "shopify-mcp",
  version: "1.0.0",
});

server.tool(
  "get_products",
  "Get products list",
  {},
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "Products coming soon 🚀"
        }
      ]
    };
  }
);

app.post("/mcp", async (req, res) => {
  await server.handleRequest(req, res);
});

app.get("/", (req, res) => {
  res.send("MCP OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
