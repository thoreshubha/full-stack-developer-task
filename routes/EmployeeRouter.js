const express = require("express")
const router = express.Router();

const emp = require('../controller/EmployeeController')

router.get("/Employee",emp.display)

router.post("/Employee/add",emp.create)

router.put("/Employee/update",emp.update)

router.delete("/Employee/delete/:id",emp.delete)

module.exports = router;