import React, { useState } from "react";

const AddNoteModal = ({ onAddNote, onClose }) => {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject || !title || !url) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const newNote = {
      subject,
      title,
      url,
    };

    onAddNote(newNote);
    onClose();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNoteModal;
