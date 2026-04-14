const express = require("express");
const app = express();

app.use(express.json());

// health
app.get("/", (req, res) => {
  res.send("OK");
});

app.post("/mcp", (req, res) => {
  const { method, id } = req.body || {};

  // 🔥 مهم جدًا
  if (method === "initialize") {
    return res.json({
      jsonrpc: "2.0",
      id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: {
          tools: {}
        },
        serverInfo: {
          name: "shopify-mcp",
          version: "1.0.0"
        }
      }
    });
  }

  if (method === "tools/list") {
    return res.json({
      jsonrpc: "2.0",
      id,
      result: {
        tools: [
          {
            name: "get_products",
            description: "Get products list",
            inputSchema: {
              type: "object",
              properties: {}
            }
          }
        ]
      }
    });
  }

  if (method === "tools/call") {
    return res.json({
      jsonrpc: "2.0",
      id,
      result: {
        content: [
          {
            type: "text",
            text: "Products working 🚀"
          }
        ]
      }
    });
  }

  return res.json({
    jsonrpc: "2.0",
    id,
    result: {}
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
