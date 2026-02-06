import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div>
      <h1>HRMS Lite</h1>
      <EmployeeForm refresh={() =>window.location.reload()}/>
      <EmployeeList/>
      <hr/>
      <AttendanceForm/>
      <AttendanceList/>

    </div>
  );
}

export default App;
