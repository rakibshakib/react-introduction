import React from "react";

export default function User(props) {
  const { name, email, phone } = props.data;
  const style = {
    border: "2px solid black",
    padding: "10px",
    margin: "15px 25px",
    backgroundColor: "lightgreen",
  };
  return (
    <>
      <div style={style}>
        <h2>Name: {name}</h2>
        <h4>Email: {email}</h4>
        <p>Phone: {phone}</p>
      </div>
    </>
  );
}
