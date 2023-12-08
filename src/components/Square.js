import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";

export default function Sqaure({ value, onSquareClick }) {
  const handleClick = () => {
    onSquareClick();
  };
  return (
    <>
      <div className="flex justify-center m-1">
        <button
          className="square btn btn--primary px-4 "
          onClick={() => handleClick()}
          value={value}
        >
          {value == "X" ? <ImCross color="red" /> : null}
          {value == "O" ? <FaRegCircle color="green" /> : null}
        </button>
      </div>
    </>
  );
}
