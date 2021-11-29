import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData)
  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* use props to get acess down to child which is isDarkMode={isDarkMode}  */}
      {/* use props{callback} to get access from child up to parent
      i.e; onDarkModeClick is a prop{CallBack} which enable on isDarkMode assign to the Prop{CallBack} to be used in the child component accessing the handleDarkModeClick in the Parent component */}
      {/* Tldr; props = prop{callBack} to go up the parent component
          Tldr; props = props to go down to the child component */}
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
