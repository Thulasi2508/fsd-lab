
import FormHeader from "./components/FormHeader";
import StudentForm from "./components/StudentForm";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <div className="registration-container">
        <FormHeader />
        <StudentForm />
      </div>
    </div>
  );
}

export default App;
