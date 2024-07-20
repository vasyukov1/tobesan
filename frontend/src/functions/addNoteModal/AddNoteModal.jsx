import React, { useState } from "react";

import MaterialService from "../../service/MaterialService";

const AddNoteModal = ({ onClose, updateMaterialsList }) => {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!subject || !title || !link) {
      alert("Заполните все поля.");
      return;
    }

    MaterialService.addMaterial(subject, title, link).then((result) => {
      if (result) {
        console.log("Material is added");
        updateMaterialsList(title, link);
      } else {
        alert("Ошибка при добавлении материалов");
      }
    });
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
          Link:
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddNoteModal;
