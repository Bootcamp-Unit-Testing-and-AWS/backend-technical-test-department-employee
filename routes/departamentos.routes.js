import express from "express";
import departmentController from "../controllers/departamento.controller.js";
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Ruta de prueba para departamento");
});

router.get("/", departmentController.getDepartment);
router.get("/:codigo", departmentController.getDepartmentByCode);
router.post("/", departmentController.createDepartment);
router.put("/:codigo", departmentController.updateDepartment);
router.delete("/:codigo", departmentController.deleteDepartment);

export default router;
