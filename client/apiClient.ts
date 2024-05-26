import request from 'superagent'
import { Item } from './models/groceryData'

const API_URL = "http://localhost:5173/api/v1/grocery/items"

export async function fetchItems(): Promise<Item[]> {
  const res = await request.get(API_URL)
  return res.body.items
}

export async function addItem(todo:string, category: string): Promise<Item> {
  const newItem = {todo, category, completed: false, userId: 1}
  const res = await request.post(API_URL).send(newItem)
  return res.body
}

export async function deleteItem(id: number): Promise<void> {
  await request.delete(`${API_URL}/${id}}`)
}