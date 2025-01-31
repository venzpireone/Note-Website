import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import Note from "./Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const fetchNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const notesData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setNotes(notesData);
  };

  const addNote = async () => {
    if (newNote.trim() === "") return;
    await addDoc(collection(db, "notes"), {
      text: newNote,
    });
    setNewNote("");
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, "notes", id));
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>My Notes</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((note) => (
          <Note key={note.id} note={note} onDelete={deleteNote} />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note"
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginRight: "8px",
          }}
        />
        <button
          onClick={addNote}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFA500",
            color: "white",
            cursor: "pointer",
          }}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default App;