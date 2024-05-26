import React, {useState, useEffect} from "react"
import { Item } from "../models/groceryData"
import InputSection from "./InputSection"
import ListSection from './ListSection'
import { fetchItems, addItem, deleteItem } from "../apiClient"

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const items = await fetchItems();
      setItems(items);
    } catch (error) {
      console.log('Error fetching items:', error);
    }
  };

  const handleAddItem = async (todo: string, category: string) => {
    try {
      const newItem = await addItem(todo, category);
      setItems([...items, newItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDeleteItem = async (id: number) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="main-component">
      <InputSection addItem={handleAddItem} />
      <ListSection items={items} deleteItem={handleDeleteItem} />
    </div>
  );
};


export default App
