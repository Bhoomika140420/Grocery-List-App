import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)} //This pattern is commonly used in React for handling user input and updating state accordingly.
      />

      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()} //the method useRef is used when we want to change the focus
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
