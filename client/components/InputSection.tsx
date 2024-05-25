import React from "react";
import ListItem from "./ListItems";
import { Item } from "../models/groceryData";


interface Props {
  items: 
  deleteItem: (id: number) => void
}

function ListSection ({ items, deleteItem}: Props){
  const categories =['Meat/Poultry/Fish','Pantry', 'Fruit & Vegetables', 'Dairy', 'Home Essentials']
  return (
    <div className="list-section">
      {categories.map(catergory => (
        <div key={catergory} className="category-section">
          <h2>{catergory}</h2>
          <ul>
            {items.filter(item => item.catergory === catergory).map(item => (
              <ListItem key={item.id} item={item} deleteItem={deleteItem} />
            ))}
          </ul>
          </div>
      ))}

    </div>
  )
}
export default ListSection