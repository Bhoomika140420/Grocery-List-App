import React, { useRef } from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length > 0 ? ( // check if items array is not empty
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty!</p>
      )}
    </> //removed main, just keepin' it a s fragment:<> </>
  );
};

export default Content;
