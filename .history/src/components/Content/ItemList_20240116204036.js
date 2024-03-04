import { FaTrashAlt} from 'react-icons/fa';
import LineItem from './LineItem'
const ItemList = ({ items, handleCheck, handleDelete}) => {

    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    item={item}
                    handleCheck={ha}
            ))}
          </ul>
    )
}

export default ItemList;