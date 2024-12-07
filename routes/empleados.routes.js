import express from "express";
import employeeController from "../controllers/empleados.controller.js";
const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Ruta de prueba para empleado");
});

router.get("/", employeeController.getEmployees);
router.get("/:codigo", employeeController.getEmployeeByCode);
router.post("/", employeeController.createEmployee);
router.put("/:codigo", employeeController.updateEmployee);
router.delete("/:codigo", employeeController.deleteEmployee);

export default router;
