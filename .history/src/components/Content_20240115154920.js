import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Dave')
  const handleNameChange = () => {
    const names = ['Bob','Kevin','Dave'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => {
    console.log('You Clicked it');
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleNameChange}></button>
        <button onClick={() => handleClick2('Dave')}>Click It</button>
        <button onClick={(e) => handleClick3(e)}>Click It</button>
    </main>
  )
  }

export default Content;
