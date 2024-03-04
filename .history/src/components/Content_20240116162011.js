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
    const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked } :)
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

                <label>{item.item}</label>
                <FaTrashAlt 
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
