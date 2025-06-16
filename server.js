import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'


const app = express()

app.use(express.json())
app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.listen(3000, () => console.log("Servidor rodando :)"))

//ajsute teste

app.use(express.json());
app.use(express.static('.')); // serve arquivos estáticos como index.html
app.use('/', publicRoutes);
