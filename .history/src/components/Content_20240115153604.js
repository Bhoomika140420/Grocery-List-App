
const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob','Kevin','Dave'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleClick = () => {
    console.log('You Clicked it');
  }

  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }

  const handleClick3 = (name) => {
    console.log();
  }

  return (
    <main>
        <p>
            Hello {handleNameChange()}!
        </p>
        <button onClick={handleClick}>Click It</button>
        <button onClick={() => handleClick2('Dave')}>Click It</button>
    </main>
  )
  }

export default Content;
