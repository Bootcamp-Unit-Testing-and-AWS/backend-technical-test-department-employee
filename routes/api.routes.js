import express from "express";
const router = express.Router();
import departamento_routes from "./departamentos.routes.js";
import empleado_routes from "./empleados.routes.js";

router.use("/departamento", departamento_routes);
router.use("/employee", empleado_routes);

export default router;
