import React from "react";

export default function Counter(props) {
  return (
    <div>
      <h2>Count: {props.count}</h2>
      <button onClick={() => props.click("true")}>Increment</button>
      <button onClick={() => props.click("false")}>Decrement</button>
    </div>
  );
}
