const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentByID);
router.delete("/:id", controller.deleteStudent);
router.put("/:id", controller.updateStudent);

module.exports = router;
