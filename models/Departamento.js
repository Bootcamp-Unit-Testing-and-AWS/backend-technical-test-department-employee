import { Schema, model } from "mongoose";

const DepartmentSchema = new Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
});

const Department = model("Department", DepartmentSchema);

export default Department;
