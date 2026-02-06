import { useState, useEffect } from "react";
import api from "../api/axios";

function AttendanceForm() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    date: "",
    status: "Present",
  });

  useEffect(() => {
    api.get("/employees/").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await api.post("/attendance/", form);
    alert("Attendance marked");
  } catch {
    alert("Error saving attendance");
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <h3>Mark Attendance</h3>

      <select name="employee_id" onChange={handleChange}>
        <option>Select Employee</option>
        {employees.map((e) => (
          <option key={e.employee_id} value={e.employee_id}>
            {e.full_name}
          </option>
        ))}
      </select>

      <input type="date" name="date" onChange={handleChange} />

      <select name="status" onChange={handleChange}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AttendanceForm;
