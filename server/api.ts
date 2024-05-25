import request from 'superagent'
import 'dotenv/config'
import { GroceryListData, Item } from '../client/models/groceryData'

const API_KEY = process.env.API_KEY
const BASE_URL = 'https://paataka.cloud/api/_/crayon/todos'

if(!API_KEY){
  throw new Error('Missing API_KEY')}

//function to get all items
export const getItems = async (): Promise<GroceryListData> => {
  const response = await request
  .get(BASE_URL)
  .auth(API_KEY as string, {type: 'bearer'})
    return response.body as GroceryListData
  }

//function to add new item
export const additem = async (todo: string, catergory: string): Promise<Item> =>{
  const addRespone = await request
  .post(`${BASE_URL}/items`)
  .auth(API_KEY as string, {type: 'bearer'})
  .send({todo, catergory})
  return addRespone.body as Item

}

//function to delete an item by ID
export const deleteItem = async (id: number): Promise<Item> => {
  const response =await request
  .delete(`${BASE_URL}/items/${id}`)
  .auth(API_KEY as string, {type: 'bearer'})
  return response.body as Item
}
