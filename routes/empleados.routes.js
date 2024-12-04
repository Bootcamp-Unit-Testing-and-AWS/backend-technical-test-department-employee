import express from "express";
const router = express.Router();

router.get('/test', (req,res) =>{
    res.send('Ruta de prueba para empleado')
})

export default router;