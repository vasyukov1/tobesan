import Input from "../../login/input/Input";
import Button from "../../login/button/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";

// eslint-disable-next-line react/prop-types,no-unused-vars
const AddSubject = () => {
  const [subjectName, setSubjectName] = useState("");

  const dispatch = useDispatch();

  const click = () => {
    if (subjectName === "") {
      alert("Input a name of the subject: ");
    }
    console.log(subjectName);
    // createSubject(subjectName).then((data) => {
    //   console.log(data);
    //   dispatch(setSubjectAction(data));
    //   getAllSubject().then((subjects) => {
    //     setValue(subjects);
    //   });
    // });
  };

  return (
    <div>
      <h1>Добавить курс</h1>

      <Input
        text="Название"
        type="input"
        value={subjectName}
        setValue={setSubjectName}
      />

      <Button text="Добавить" onClick={click} args={subjectName} />
    </div>
  );
};

export default AddSubject;
