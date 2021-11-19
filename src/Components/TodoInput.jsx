import React, { useState } from "react";
import Button from "./Button";
const TodoInput = ({ onTaskCreate }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    onTaskCreate(text);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Type Something"
          value={text}
          onChange={handleChange}
        />
        <Button title="Add" onCli={handleClick} />
      </div>
    </>
  );
};
export default TodoInput;
