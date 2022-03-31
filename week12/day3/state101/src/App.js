import { useState, useEffect } from "react";
import "./App.css";
function App() {
  // first variable is actual state, second is a function
  // call the second function "setVariableName"
  // put default of state in parentheses
  // const [counter, setCounter] = useState(0);
  // const [user, setUser] = useState("");
  // const [text, setText] = useState("");
  // const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [currentName, setCurrentName] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");

  useEffect(() => {
    setCurrentName("");
    setCurrentNumber("");
  }, [contacts]);

  const createContact = () => {
    let contact = {
      name: currentName,
      number: currentNumber,
    };
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <div className="field">
        <p>Enter Name:</p>
        <input
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          type="text"
        />
      </div>
      <div className="field">
        <p>Enter Number:</p>
        <input
          value={currentNumber}
          onChange={(e) => setCurrentNumber(e.target.value)}
          type="text"
        />
      </div>
      <div className="field">
        <button onClick={createContact}>Add To Contacts</button>
      </div>

      <h1>Contacts</h1>
      {contacts?.map((contact) => {
        return (
          <div className="contact">
            <p className="name">{contact.name}</p>
            <p>{contact.number}</p>
          </div>
        );
      })}
      {/* <h1>The count is {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Up</button>
      <button onClick={() => setCounter(counter - 1)}>Down</button>
      <h1>The user is {user}</h1>
      <input onChange={(e) => setText(e.target.value)} type="text" />
      <button onClick={() => setUser(text)}> Set Username</button> */}
    </div>
  );
}

export default App;
