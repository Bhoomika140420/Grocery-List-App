import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import Content from "./Content";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import apiRequest from "./apiRequest";

const arr = () => {
  const shoppingList = localStorage.getItem("shoppingList");
  return shoppingList ? JSON.parse(shoppingList) : [];
  return [];
};

function App() {
  // const API_URL = "http://localhost:3500/items";

  fetch("http://localhost:3500/items")
    .then((response) => response.json())
    .then((data) => {
      items(data);
    })
    .catch((error) => console.error("Error fetching data:", error));

  const [items, setItems] = useState(arr());
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
        setItems(listItems);
        setFetchError(null); // if there is no error, successful. thn setting it to null
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      (async () => await fetchItems())(); // it reload the page after 2 seconds, a return fuction to fetchItems
    }, 2000);
  }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items?.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    //crud operations

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ); //ternary condition
    setItems(listItems);

    // http PATCH method
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    // http delete method
    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
        {isLoading && <p> Loading Items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}

        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>

      <apiRequest />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
