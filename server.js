const express = require("express");
const fetch = require("node-fetch");

const app = express();

const SHOP = "stpsco.myshopify.com";
const TOKEN = "demo";

app.get("/", (req, res) => {
  res.json({
    status: "working",
    message: "server is live"
  });
});

app.listen(3000);
