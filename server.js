const express = require("express");
const app = express();

app.use(express.json());

// MCP endpoint
app.post("/", (req, res) => {
  res.json({
    tools: [
      {
        name: "get_products",
        description: "Get products list",
        input_schema: {
          type: "object",
          properties: {}
        }
      }
    ]
  });
});

// test
app.get("/", (req, res) => {
  res.json({ status: "MCP server ready" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
