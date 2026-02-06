import { useEffect, useState } from "react";
import api from "../api/axios";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await api.get("/employees/");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div>
      <h3>Employees</h3>

      {employees.map((e) => (
        <div key={e.employee_id}>
          {e.full_name} - {e.department}
          <button onClick={() => deleteEmployee(e.employee_id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
