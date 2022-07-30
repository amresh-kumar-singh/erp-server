const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const createUser = require("./routes/createUser");
const getInvoiceNo = require("./routes/getInvoiceNo");
const searchUser = require("./routes/searchUser");
const getProducts = require("./routes/getProducts");
const generateInvoice = require("./routes/generateInvoice");
const port = process.env.PORT;
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/invoiceNo", getInvoiceNo);
app.use("/api/createUser", createUser);
app.use("/api/searchUser", searchUser);
app.use("/api/getProducts", getProducts);
app.use("/api/generateInvoice", generateInvoice);

app.listen(port, () => {
  console.info(`Listning on PORT ${port}`);
});
