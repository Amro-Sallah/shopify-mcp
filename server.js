const express = require("express");
const app = express();

app.use(express.json());

// ✅ مهم: CORS + headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});

// health check
app.get("/", (req, res) => {
  res.send("OK");
});

// OPTIONS support
app.options("*", (req, res) => {
  res.sendStatus(200);
});

// MCP endpoint
app.post("/", (req, res) => {
  const { method, id } = req.body;

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
            text: "Products data coming soon 🚀"
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
