import Department from "../models/Departamento.js";

async function getDepartment(req, res) {
  try {
    const departments = await Department.find();
    res.status(200).json({ departments: departments });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when getting the Departments", error });
  }
}

async function getDepartmentByCode(req, res) {
  const { codigo } = req.params;
  try {
    const department = await Department.findOne({ codigo: codigo });
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.status(200).json(department);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when getting the Department", error });
  }
}

async function createDepartment(req, res) {
  //console.log(req.body);
  try {
    // const { codigo, nombre } = req.body;
    console.log("codigo--> ", codigo, " nombre--> ", nombre);
    const newDepartment = await Department.create({ codigo, nombre });
    //await newDepartment.save();
    res.status(201).json({
      message: "Department created successfully",
      department: newDepartment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when trying to create the Department", error });
  }
}

async function updateDepartment(req, res) {
  // console.log(req.params);
  const codigo = req.params;
  const updateDepartment = req.body;
  try {
    const departmentUpdate = await Department.findOneAndUpdate(
      codigo,
      updateDepartment,
      { new: true }
    );
    if (!departmentUpdate) {
      return res.status(404).json({ message: "Department no found" });
    }
    res.status(200).json({
      message: "Department updated successfully",
      department: departmentUpdate,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when updating the department", error });
  }
}

async function deleteDepartment(req, res) {
  //console.log(req.params);
  try {
    const codigo = req.params.codigo;
    const searchDepartment = await Department.findOne({ codigo: codigo });
    console.log(searchDepartment);
    const departmentDeleted = await Department.findOneAndDelete(codigo);
    console.log(departmentDeleted);

    if (!departmentDeleted) {
      return res.status(404).json({ message: "Department not found" });
    }
    res.status(200).json({
      message: "Department deleted successfully",
      department: departmentDeleted,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error when deleting the apartment", error });
  }
}

export default {
  getDepartment,
  getDepartmentByCode,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
