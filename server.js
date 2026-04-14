const express = require("express");
const app = express();

app.use(express.json());

// MCP JSON-RPC endpoint
app.post("/", (req, res) => {
  const { method } = req.body;

  if (method === "tools/list") {
    return res.json({
      jsonrpc: "2.0",
      id: req.body.id,
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

  res.json({
    jsonrpc: "2.0",
    id: req.body.id,
    result: {}
  });
});

// test
app.get("/", (req, res) => {
  res.send("MCP READY");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
