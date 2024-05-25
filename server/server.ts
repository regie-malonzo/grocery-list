import * as Path from 'node:path'
import express from 'express'
import * as URL from 'node:url'
import { join } from 'node:path'
import grocery from './routes/grocery.ts'



const server = express()
const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

// server.get('/api/v1/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   const index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })

server.use(express.json())
server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1/grocery', grocery)


// if (process.env.NODE_ENV === 'production') {
//   server.use(express.static(Path.resolve('public')))
//   server.use('/assets', express.static(Path.resolve('./dist/assets')))
//   server.get('*', (req, res) => {
//     res.sendFile(Path.resolve('./dist/index.html'))
//   })
// }

export default server
