import express from 'express'
import dotenv from 'dotenv'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.listen(3000, () => console.log("Servidor rodando :)"))

