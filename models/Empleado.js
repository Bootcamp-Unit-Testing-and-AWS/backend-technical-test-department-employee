import { Schema, model } from "mongoose";

const EmpleadoSchema = new Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido1: { type: String, required: true },
  apellido2: { type: String },
  codigo_departamento: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
});

const Empleado = model("Empleado", EmpleadoSchema);

export default Empleado;
