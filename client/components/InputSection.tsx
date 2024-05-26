import React, {useState} from "react";

interface InputSectionProps {
  addItem: (todo: string, category: string) => void
}

const InputSection: React.FC<InputSectionProps> = ({addItem}) => {
  const [todo, setTodo] = useState('')
  const [category, setCategory] = useState('Meat/Poultry/Fish')
  
  const handleAddItem = () => {
    if(todo.trim()) {
      addItem(todo, category)
      setTodo
    }
  }
  return (
    <div className="input-section">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter Item"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Meat/Poultry/Fish">Meat/Poultry/Fish</option>
          <option value="Pantry">Pantry</option>
          <option value="Fruit & Vegetable">Fruit & Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value="Home Essentials">Home Essentials</option>
        </select>
        <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default InputSection