// eslint-disable-next-line react/prop-types,no-unused-vars
const Button = ({ text, onClick = () => {}, args = ["a"] }) => {
  return (
    <button className="" type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
