/*this was a lot of work. basically this is a react component which takes 
a given array and goes through it recursively creating levels with 
dropdowns of children and adding the children as texttboxes. it also 
takes a method which handles the hooks/state for the parent for each 
checkbox*/
import React, { useState } from "react";
const MultiLevelDropdown = ({items, isOpen = true, handleCheckBoxes}) => {
  console.log(handleCheckBoxes, "handler");
  const [openItem, setOpenItem] = useState(null);
  {/*allows dropdown to open and close when clicked*/}
  const handleClick = (item) => {
    setOpenItem(item === openItem ? null : item);
  };
  return (
    <div>
      <ul style={{ display: isOpen ? "block" : "none" }}>
        {items.map((item) => (
              <li key={item.label}>
                {item.hasOwnProperty("children") ? (
                  <a href="#!" onClick={() => handleClick(item)}>
                    {item.label}
                  </a>
                ) : (
                  <div>
                    <input type="checkbox" autoComplete="off" className = "checkbox" onClick={() => handleCheckBoxes(item.label)}/>
                    <a className ="links">
                      {item.label}
                    </a>
                  </div>
                )}
                {item.hasOwnProperty("children") && (
                  <MultiLevelDropdown
                    items={item.children}
                    isOpen={item === openItem}
                    handleCheckBoxes={handleCheckBoxes}
                  />
                )}
              </li>
            )
        )}
      </ul>
    </div>
  );
};
export default MultiLevelDropdown;
