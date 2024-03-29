import Header from "./components/Header";
import AddItem from "./components/Content/AddItems";
import SearchItem from "./components/Content/SearchItem";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
import { useState, use } from "react";

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function App() {
  const [items, setItems] = useState(arr());
  const [newItem, setNewItem] = useState('');
  const[search, setSearch] = useState('')

  const setAndSaveItems = (newItems) => {
    setItems(newItems); //updating local storage through setItems and rendering to other functions(addItem,handleCheck,handleSubmit)
  };

  const addItem = (item) => {
    const id = items.length ? items[items?.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ); //ternary condition
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem); // adding new items to the list
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit} //sending as props
      />

      <SearchItem
        search={search}
        setSearch={setSearch}
      />

      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
