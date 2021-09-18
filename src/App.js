import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import User from "./components/User/User";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const Increment = (isIncriment) => {
    isIncriment === "true" ? setCount(count + 1) : setCount(count - 1);
  };
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <Counter count={count} click={Increment} />
      {users.map((user) => (
        <User data={user} />
      ))}
    </div>
  );
}

export default App;
