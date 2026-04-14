const express = require("express");
const app = express();

app.use(express.json());

// 🔥 مهم: health check
app.get("/", (req, res) => {
  res.send("OK");
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

  return res.json({
    jsonrpc: "2.0",
    id,
    result: {}
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running"));
