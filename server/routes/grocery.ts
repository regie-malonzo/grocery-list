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
  const {todo, category} = req.body
  try {
   const newItem: Item = await additem(todo, category)
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
    await deleteItem(Number(id))
    res.status(204).send()
    
  }catch(err) {
    if(err instanceof Error){
      res.status(500).send((err as Error).message)
    }else{
      res.status(500).send('Sorry something went wrong')
    }
  }
})


export default router