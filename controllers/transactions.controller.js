const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let transactionModel = require("../models/transaction.model");

router.get("/", (req, res) => {
    res.json(transactionModel);
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    const match = transactionModel.find((item) => item.id === id);
  
    if (!match) {
      res.status(404).json({
        status: false,
        message: "Id not found",
      });
    } else {
      res.json({ status: true, data: match });
    }
});

router.post("/", (req, res) => {
    const { transaction } = req.body;
  
    if (Object.entries(transaction).length < 1) {
      res
        .status(400)
        .json({ status: false, message: "You cannot create an empty todo" });
    } else {
      const newTransaction = {
        id: uuidv4(),
        ...transaction
      };
  
      transactionModel.push(newTransaction);
  
      res.status(201).json({ status: true, data: newTransaction });
    }
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    let foundIndex = transactionModel.findIndex((item) => item.id === id);
  
    if (foundIndex === -1) {
      res
        .status(404)
        .json({ status: false, message: "sorry, no todo with this id is found" });
    } else {
      let foundTransaction = transactionModel[foundIndex];
  
      let newTransaction = transactionModel.filter((item) => item.id !== id);
  
      transactionModel = newTransaction;
  
      res.json({
        status: true,
        message: "success",
        data: foundTransaction,
      });
    }
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
  
    const foundIndex = transactionModel.findIndex((item) => item.id === id);
  
    if (foundIndex === -1) {
      res.status(404).json({ status: false, message: "Id not found!" });
    } else {
      let foundTransaction = transactionModel[foundIndex];
  
      let newObj = {
        ...foundTransaction,
        ...req.body,
      };
  
      transactionModel.splice(foundIndex, 1, newObj);
  
      res.json({ message: "success", status: true, data: newObj });
    }
});

module.exports = router;