const saveSubjects = () => {
  localStorage.setItem("disciplines", JSON.stringify(disciplines));
};

export const disciplines =
  JSON.parse(localStorage.getItem("disciplines")) || [];

export const addSubject = (name, linkName) => {
  disciplines.push({ name, linkName });
  saveSubjects();
};
