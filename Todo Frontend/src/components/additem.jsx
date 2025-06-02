import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

function Additem({ todoInput }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const Onclick = (event) => {
    const todoName = todoNameElement.current.value;
    todoNameElement.current.value = "";
    const todoDate = todoDateElement.current.value;
    todoDateElement.current.value = "";
    event.preventDefault();
    todoInput(todoName, todoDate);
  };
  return (
    <div className="container my-3">
      <form className="row g-2 align-items-center" onSubmit={Onclick}>
        <div className="col-5">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            required
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            required
            className="form-control"
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center"
          >
            <IoMdAddCircle className="me-1" />
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default Additem;
