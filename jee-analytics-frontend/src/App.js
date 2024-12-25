import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import Auth from "./pages/Auth";
import Dashboard from "./components/Dashboard";
import TestReminder from "./components/TestReminder";
import DataEntryForm from "./pages/DataEntry";
import TestDataEntryForm from "./components/TestDataEntryForm";

function App() {
  return (
      <>
        {/*<Login/>*/}
        {/*  <Register/>*/}
        {/*  <Auth/>*/}
          <DataEntryForm/>
          <TestDataEntryForm/>
          <Dashboard/>
          {/*<TestReminder/>*/}

      </>
  );
}

export default App;
