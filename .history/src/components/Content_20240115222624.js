import { useState } from 'react'

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
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

  return (
    <main>
      <ul>
        {items.map((item) => (
            <li className='item'></li>
        ))}
      </ul>
    </main>
  )
  
  
  }

export default Content;
