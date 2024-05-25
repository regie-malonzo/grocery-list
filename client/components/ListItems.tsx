import React from "react";

function ListItem({item, deleteItem}) {
  return(
    <li>
      {item.todo}
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </li>
  )
}

export default ListItem