// eslint-disable-next-line react/prop-types
const Input = ({ text, type, value = "", setValue = () => {} }) => {
  return (
    <label className="">
      <input
        className=""
        placeholder={text}
        type={type}
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </label>
  );
};

export default Input;
