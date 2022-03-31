import "./App.css";
import { useState } from "react";
import "./App.css";

function App() {
  // generic hook
  // const defaultState = { name: "", email: "" };
  // const [inputField, setInputField] = useState({});
  // const [userData, setUserData] = useState(defaultState);
  // const validateForm = (e) => {
  //   e.preventDefault();
  //   if (inputField.name === undefined) {
  //     alert("noooooo");
  //     return;
  //   }
  //   setUserData(inputField);
  //   setInputField(defaultState);
  // };
  const defaultState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
  };
  const [currentInput, setCurrentInput] = useState(defaultState);
  const [messages, setMessages] = useState([]);

  const validate = () => {
    for (const field in currentInput) {
      if (currentInput[field] === "") {
        window.alert("Please fill out every field before submitting");
        return;
      } else {
        setMessages([...messages, currentInput]);
      }
    }
  };

  return (
    <div className="App">
      <h1>Form Practice</h1>
      <div className="fieldContainer">
        <p className="fieldTitle">First Name</p>
        <input
          className="field"
          name="firstName"
          onChange={(e) =>
            setCurrentInput({
              ...currentInput,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          value={currentInput?.name}
        />
      </div>
      <div className="fieldContainer">
        <p className="fieldTitle">Last Name</p>
        <input
          className="field"
          name="lastName"
          onChange={(e) =>
            setCurrentInput({
              ...currentInput,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          value={currentInput?.name}
        />
      </div>
      <div className="fieldContainer">
        <p className="fieldTitle">Phone</p>
        <input
          className="field"
          name="firstName"
          onChange={(e) =>
            setCurrentInput({
              ...currentInput,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          value={currentInput?.name}
        />
      </div>
      <div className="fieldContainer">
        <p className="fieldTitle">Email</p>
        <input
          className="field"
          name="email"
          onChange={(e) =>
            setCurrentInput({
              ...currentInput,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          value={currentInput?.name}
        />
      </div>
      <div className="fieldContainer">
        <p className="fieldTitle">Subject</p>
        <select
          value={currentInput?.name}
          name="subject"
          onChange={(e) =>
            setCurrentInput({
              ...currentInput,
              [e.target.name]: e.target.value,
            })
          }
        >
          <option value="Work">Work</option>
          <option value="Home">Home</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="fieldContainer">
        <p className="fieldTitle">Message</p>
        <textarea
          className="fieldText"
          name="message"
          onChange={(e) =>
            setCurrentInput({
              ...currentInput,
              [e.target.name]: e.target.value,
            })
          }
          type="text"
          value={currentInput?.name}
        ></textarea>
      </div>
      <button onClick={validate}>Submit</button>

      {/* <input
          name="name"
          onChange={(e) =>
            setInputField({ ...inputField, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="name"
          value={inputField?.name}
        />
        <input
          name="email"
          onChange={(e) =>
            setInputField({ ...inputField, [e.target.name]: e.target.value })
          }
          type="text"
          placeholder="email"
          value={inputField?.email}
        />
        <input type="submit" value="submit" onSubmit={(e) => validateForm(e)} /> */}
    </div>
  );
}

export default App;
