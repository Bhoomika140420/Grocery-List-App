import { FaTrashAlt} from 'react-icons/fa';

̥const ItemList = ({ items, handleCheck, handleDelete}) => {

    return (
        <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                  <input 
                    type="checkbox"
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}
                  />

                    <label
                        style={item.checked ? { textDecoration:'line-through' } : null}  //ternary to check deleted items
                        onDoubleClick={() => handleCheck(item.id)}
                    >
                        {item.item}
                    </label>
                    <FaTrashAlt 
                    onClick={() => handleDelete(item.id)}
                      role="button" 
                      tabIndex="0"  //delete button
                    />
                    
                </li>
            ))}
          </ul>
       
    )
}

export default ItemList;