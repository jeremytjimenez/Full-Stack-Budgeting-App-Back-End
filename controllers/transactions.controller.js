const express = require("express");
const router = express.Router();
let transactionModel = require("../models/transaction.model");

router.get("/", (req, res) => {
    res.json(transactionModel);
});

module.exports = router;