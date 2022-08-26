const env = require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const router = require("./productRouter");

const port = process.env.PORT;
const morgan = require("morgan");
const bodyParser = require("body-parser");

// ab -n 20 -c 10 http://localhost:5001/order

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan("dev"));

app.use("/", router);

mongoose.connect(process.env.MONGODB_URI, (error) => {
   if (error) console.log("Error!" + error);
   console.log("Connect DB");
}); 

app.listen(port, () => {
   console.log("App runing at port " + port);
});
