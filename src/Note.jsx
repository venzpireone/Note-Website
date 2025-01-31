import React from "react";

const Note = ({ note, onDelete }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFE5B4",
        padding: "16px",
        borderRadius: "16px",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
        margin: "8px",
        width: "200px",
      }}
    >
      <p>{note.text}</p>
      <button
        onClick={() => onDelete(note.id)}
        style={{
          padding: "4px 8px",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#FF4500",
          color: "white",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Note;