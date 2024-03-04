import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItem, setNewItem, handleSubmit}) => {
   
    return (
        <form className ='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addItem'>Add Item</label>
                <input 
                    autoFocus
                    id="addItem"
                    type="text"
                    placeholder="Add Item"
                    required
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}  //This pattern is commonly used in React for handling user input and updating state accordingly.
                 />

                 <button
                    type='submit'
                    aria-label='Add Item"
                 >
                    <FaPlus />
                 </button>
        </form >
    )
}

export default AddItem;