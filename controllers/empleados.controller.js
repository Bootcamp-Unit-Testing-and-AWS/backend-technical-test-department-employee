import Employee from "../models/Empleado.js";

async function getEmployees(req, res) {
  try {
    const employees = await Employee.find().populate("codigo_departamento");
    res.status(200).json({ employees: employees });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when getting the employees", error });
  }
}

async function getEmployeeByCode(req, res) {
  const { codigo } = req.params;
  try {
    const employee = await Employee.findOne({ codigo: codigo }).populate(
      "codigo_departamento"
    );
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: "Error when getting the Employee", error });
  }
}

async function createEmployee(req, res) {
  //console.log(req.body);
  try {
    const { codigo, nombre, apellido1, apellido2, codigo_departamento } =
      req.body;
    console.log("codigo--> ", codigo, " nombre--> ", nombre);
    const newEmployee = await Employee.create({
      codigo,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento,
    });
    //await newEmployee.save();
    res.status(201).json({
      message: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when trying to create the Employee", error });
  }
}

async function updateEmployee(req, res) {
  // console.log(req.params);
  const codigo = req.params;
  const updateEmployee = req.body;
  try {
    const employeeUpdate = await Employee.findOneAndUpdate(
      codigo,
      updateEmployee,
      { new: true }
    );
    if (!employeeUpdate) {
      return res.status(404).json({ message: "Employee no found" });
    }
    res.status(200).json({
      message: "Employee updated successfully",
      employee: employeeUpdate,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when updating the employee", error });
  }
}

async function deleteEmployee(req, res) {
  //console.log(req.params);
  try {
    const codigo = req.params.codigo;
    const searchEmployee = await Employee.findOne({ codigo: codigo });
    console.log(searchEmployee);
    const deleteEmployee = await Employee.findOneAndDelete(codigo);
    console.log(deleteEmployee);

    if (!deleteEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({
      message: "Employee deleted successfully",
      employee: Employee,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when deleting the employee", error });
  }
}

export default {
  getEmployees,
  getEmployeeByCode,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
