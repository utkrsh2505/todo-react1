const Button = ({ title, onCli }) => {
  return (
    <button className="add-btn" onClick={onCli}>
      {title}
    </button>
  );
};
export default Button;
