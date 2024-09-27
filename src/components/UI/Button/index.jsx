import "./index.css";

function Button(props) {
  const { label, onClick, className } = props;

  return (
    <button className={className} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
