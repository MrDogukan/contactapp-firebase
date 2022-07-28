import { useState } from "react";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";

const initialValues = { username: "", phoneNumber: "", gender: "" };

function App() {
  const [info, setInfo] = useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    // AddUser()
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts />
    </div>
  );
}

export default App;
