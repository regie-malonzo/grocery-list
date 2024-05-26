import React, { useEffect, useState } from "react";
import ListItem from "./ListItems";
import { Item } from "../models/groceryData";


interface Props {
  items:Item[]
  deleteItem: (id: number) => void
}

const categorizeItems =(items: Item[]): Item[] => {
  return items.map(item => {
    if(item.todo.toLocaleLowerCase().includes("meat") || item.todo.toLocaleLowerCase().includes("fish")){
      return{...item, category: "Meat/Poultry/Fish"}
    }else if(item.todo.toLocaleLowerCase().includes("pantry")){
      return{...item, category: "Pantry"}
    } else if(item.todo.toLocaleLowerCase().includes("fruit") || item.todo.toLocaleLowerCase().includes("vegetables")) {
      return{...item, category: "Fruit & Vegetables"}
    }else if (item.todo.toLocaleLowerCase().includes("dairy")){
      return {...item, category: "Dairy"}
    } else {
      return {...item, category: "Home Essentials"}
    }
  })
}

const ListSection: React.FC<Props> = ({ items, deleteItem}) =>{
  const [categorizedItems, setCategorizesItems] = useState<Item[]>([])
  useEffect (() =>{
    setCategorizesItems(categorizeItems(items))
  },[items])
  
  const categories =['Meat/Poultry/Fish','Pantry', 'Fruit & Vegetables', 'Dairy', 'Home Essentials']
  return (
    <div className="list-section">
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <ul>
            {categorizedItems.filter(item => item.category === category).map(item => (
              <ListItem key={item.id} item={item} deleteItem={deleteItem} />
            ))}
          </ul>
          </div>
      ))}

    </div>
  )
}
export default ListSection