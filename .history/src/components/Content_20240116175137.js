import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered A lmonds Unsalted "
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id:3,
      checked: false,
      item: "Item 3"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked } : item);  //ternary condition
    setItems(listItems);
    localStorage.setItem('Shoppinglist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter()
  }


  return (
    <main>
      <ul>
        {items.map((item) => (
            <li className="item" key={item.id}>
              <input 
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />

                <label
                    style={(item.checked) ? { textDecoration:'line-through' } : null}  //ternary to check deleted items
                    onDoubleClick={() => handleCheck(item.id)}
                >{item.item}</label>
                <FaTrashAlt 
                onClick={() => handleDelete(item.id)}
                  role="button" 
                  tabIndex="0"  //delete button
                />
                
            </li>
        ))}
      </ul>
    </main>
  )
  
  
  }

export default Content;
