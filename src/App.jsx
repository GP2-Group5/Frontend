import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Userlist from "./pages/Userlist";
import Detail from "./pages/Detail";
import MenteeList from "./pages/MenteeList";
import AddMentee from "./pages/AddMentee";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Login />

      {<Userlist />}
      {<MenteeList />}
      {<Detail />}
      {<AddMentee />}
    </div>
  );
}

export default App;
