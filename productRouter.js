const express = require("express");
const { addProduct } = require("./addProduct");
const { orderProduct } = require("./productCtrl");
const router = express.Router();

const id = "6305e98ecd1aa3c501ea7ff4";
const order = 2;
const quantity = 10;

router.get("/order", async (req, res) => {
   // const {id,order}=req.body
   const time = new Date().getTime();
   console.log(`  ~ time`, time, ",");
   const result = await orderProduct({ id, order });
   res.json(result);
});

router.get("/add", async (req, res) => {
   // const {id,quantity}=req.body
   const result = await addProduct({ id, quantity });
   res.json(result);
});
router.post("/order", async (req, res) => {
   const { id, order } = req.body;
   const time = new Date().getTime();
   console.log(`  ~ time`, time, ",");
   const result = await orderProduct({ id, order });
   res.json(result);
});

router.post("/add", async (req, res) => {
   const { id, quantity } = req.body;
   const result = await addProduct({ id, quantity });
   res.json(result);
});

module.exports = router;
