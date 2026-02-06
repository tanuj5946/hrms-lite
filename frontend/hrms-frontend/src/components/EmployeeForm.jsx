import { useState } from "react";
import api from "../api/axios";

function EmployeeForm({ refresh }) {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await api.post("/employees/", form);

    alert("Employee added");

    setForm({
      employee_id: "",
      full_name: "",
      email: "",
      department: "",
    });

    refresh();
  } catch (err) {
    alert(err.response?.data?.detail || "Something went wrong");
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      <input name="employee_id" placeholder="Employee ID" onChange={handleChange} value={form.employee_id} />
      <input name="full_name" placeholder="Full Name" onChange={handleChange} value={form.full_name} />
      <input name="email" placeholder="Email" onChange={handleChange} value={form.email} />
      <input name="department" placeholder="Department" onChange={handleChange} value={form.department} />

      <button type="submit">Add</button>
    </form>
  );
}

export default EmployeeForm;
