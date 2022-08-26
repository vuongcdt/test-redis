const { Product } = require("./productModel");

const addProduct = async ({ id, quantity }) => {
   const product = await Product.findById(id);
   const result = await product.updateOne({ $inc: { amount: +quantity } });
   delete global[id]
   return { modifiedCount: result.modifiedCount, oldAmount: product.amount, newAmount: product.amount + quantity };
};

module.exports = { addProduct };
