import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{
        width: "33%",
        borderRadius: "0.5rem",
      }} onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
