import React, { useState } from "react";
const MultiLevelDropdown = ({ items, isOpen = true }) => {
  
  const [openItem, setOpenItem] = useState(null);
  const handleClick = (item) => {
    setOpenItem(item === openItem ? null : item);
  };
  return (
    <div>
      <ul style={{ display: isOpen ? "block" : "none" }}>
        {items.map((item) => (
              <li key={item.label}>
                {item.hasOwnProperty("children") ? (
                  <a href="#" onClick={() => handleClick(item)}>
                    {item.label}
                  </a>
                ) : (
                  <div>
                    <input type="checkbox" autocomplete="off" className = "checkbox"/>
                    <a className ="links" href="#" onClick={item.onClick}>
                      {item.label}
                    </a>
                  </div>
                )}
                {item.hasOwnProperty("children") && (
                  <MultiLevelDropdown
                    items={item.children}
                    isOpen={item === openItem}
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
