import ItemList from './ItemList';
import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, handleCheck, handleDelete}) => {

  return (
    <main>
      {items.length ? (
          <ItemList />
          ) : (
            <p style={{ marginTop: '2rem'}}>Your list is empty.</p>
          )}
    </main>
  )
  }

export default Content;
