import { useState } from "react";

function App() {
  const [todolist, settodolist] = useState([]);
  const [todoitem, settodoitem] = useState("");

  const Addtodoitem = () => {
    settodolist([...todolist, todoitem]);
    settodoitem('')
  };

  return (
    <div>
      <input type="text" value={todoitem}  onChange={(e) => settodoitem(e.target.value)} />
      <button onClick={Addtodoitem}>Add</button>
      <ul>
        {todolist.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
