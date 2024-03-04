import Header from "./components/Header";
import AddItem from "./components/Content/AddItems";
import SearchItem from "./components/Content/SearchItem";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

const arr = () => {
  // const shoppingList = localStorage.getItem("shoppingList");
  // return shoppingList ? JSON.parse(shoppingList) : [];
  return [];
};

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState(arr());
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);

  // console.log("before useEffect");

  /*  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(items));
    console.log("inside useEffect");
  }, [items]); */

  // console.log("after useEffect");

  /* const setAndSaveItems = (newItems) => {
  //   setItems(newItems); //updating local storage through setItems and rendering to other functions(addItem,handleCheck,handleSubmit)
  }; */

  //trying to store data in json server using useEffect

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL); // accesing db from URL
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json(); // the response is converted into json
        console.log(listItems);
        setItems(listItems);
        setFetchError(null); // if there is no error's, successful. thn setting it to null
      } catch (err) {
        setFetchError(err.message);
      }
    };

    setTimeout(() => {
      (async () => await fetchError())(); // it reload the page after 2 seconds, a return fuction tp fetchItems
    }, 2000);
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items?.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ); //ternary condition
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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

      <SearchItem search={search} setSearch={setSearch} />

      <main>
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}

        {!fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;
