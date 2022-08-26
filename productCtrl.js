const { Product } = require("./productModel");

let time;
const orderProduct = async ({ id, order }) => {
   clearTimeout(time);
   time = setTimeout(() => {
      delete global[id];
   }, 10 * 1000);
   if (global[id] === undefined) {
      const product = await Product.findById(id);
      !global[id] ? (global[id] = product) : null;
   }
   if (global[id].amount && global[id].amount < order) {
      return { msg: "HANG KHONG DU", amount: global[id].amount };
   }
   if (global[id].amount === 0 || global[id].amount < order) {
      return { msg: "HET HANG", amount: global[id].amount };
   } else {
      global[id].amount -= order;
      global[id].amountSell += order;
      await global[id].updateOne({ $inc: { amount: -order, amountSell: order } });
      return { order, newAmount: global[id].amount, amountSell: global[id].amountSell + Number(order) };
   }
};

module.exports = { orderProduct };
// ab -n 20 -c 10 http://localhost:5001/order
