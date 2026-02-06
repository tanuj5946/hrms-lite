import { useState } from "react";
import api from "../api/axios";

function AttendanceList() {
  const [empId, setEmpId] = useState("");
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    const res = await api.get(`/attendance/${empId}`);
    setRecords(res.data);
  };

  return (
    <div>
      <h3>View Attendance</h3>

      <input
        placeholder="Employee ID"
        onChange={(e) => setEmpId(e.target.value)}
      />

      <button onClick={fetchAttendance}>Search</button>

      {records.map((r, i) => (
        <div key={i}>
          {r.date} - {r.status}
        </div>
      ))}
    </div>
  );
}

export default AttendanceList;
