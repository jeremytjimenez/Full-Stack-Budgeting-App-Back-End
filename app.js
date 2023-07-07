const express = require("express");
const morgan = require("morgan");
const cors = require("cors")

const transactionsController = require("./controllers/transactions.controller");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController);

app.get("/", (req, res) => {
    res.send(`<h1>shut up</h1>`)
})

app.get("*", (req, res) => {
    res.status(404).json({ message: "page not found" })
})

module.exports = app;