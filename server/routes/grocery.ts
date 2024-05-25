import express from 'express'
import { getItems, additem, deleteItem } from '../api.ts'
import 'dotenv/config'
import { GroceryListData, Item } from '../../client/models/groceryData'

const router = express.Router()




router.get('/', async (req, res) => {
  try{
    const items:GroceryListData = await getItems()
    res.json(items)
    }
    catch(err) {
      if(err instanceof Error){
        res.status(500).send((err as Error).message)
      }else{
        res.status(500).send('Sorry something went wrong')
      }
    }
})

router.post('/add-item', async (req, res) => {
  const {todo, catergory} = req.body
  try {
   const newItem: Item = await additem(todo, catergory)
   res.json(newItem)

  }catch(err) {
    if(err instanceof Error){
      res.status(500).send((err as Error).message)
    }else{
      res.status(500).send('Sorry something went wrong')
    }
  }
})

router.delete('/delete-item/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deletedItem: Item = await deleteItem(Number(id))
    res.json(deletedItem)
    
  }catch(err) {
    if(err instanceof Error){
      res.status(500).send((err as Error).message)
    }else{
      res.status(500).send('Sorry something went wrong')
    }
  }
})


export default router