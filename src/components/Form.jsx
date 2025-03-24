import { useState } from "react";
import styles from "./stylesheets/style.module.css";
export const Form = ({ todoList, setTodos }) => {
  // const [activity, storeActivity] = useState("");
  const [activity, storeActivity] = useState({ name: "", done: false });
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todoList, activity]); // stores all the previous values along with the new input value in todoList
    storeActivity({ name: "", done: false }); // clears the input area
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={`clearfix ${styles.form}`}>
        <div className="float-left align-middle">
          <input
            type="text"
            // className="name"
            className={`${styles.name} `}
            value={activity.name}
            onChange={(key) =>
              storeActivity({ name: key.target.value, done: false })
            }
            placeholder="Enter todo..."
          />
        </div>
        <div className="float-right align-middle">
          <button type="submit" className="btn btn-primary ">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
