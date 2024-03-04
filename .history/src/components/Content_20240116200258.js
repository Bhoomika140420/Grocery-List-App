import 
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, handleCheck, handleDelete}) => {

  return (
    <main>
      {items.length ? (
          
          ) : (
            <p style={{ marginTop: '2rem'}}>Your list is empty.</p>
          )}
    </main>
  )
  }

export default Content;
