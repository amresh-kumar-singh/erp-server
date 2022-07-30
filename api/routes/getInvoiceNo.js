const router = require("express").Router();
const { users } = require("../config/data");
function* generateInvoiceNo() {
  let no = 1;
  while (true) {
    yield no++;
  }
}
const invoiceNo = generateInvoiceNo();

router.get("/", (req, res) => {
  const data = invoiceNo.next().value.toString().padStart(5, 0);
  return res.status(201).json("erp" + data);
});

module.exports = router;
