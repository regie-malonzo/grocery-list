import React from "react";
import { Item } from "../models/groceryData";


interface ListItemProps {
  item: Item
  deleteItem: (id:number) => void
}

function ListItem({item, deleteItem}: ListItemProps): React.ReactElement {
  return(
    <li>
      {item.todo}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  )
}

export default ListItem