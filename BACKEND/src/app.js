import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectmongodb.js'
// import connectDB from './config/connectmongolocal.js'
import authRoutes from './routes/auth.js';
import {setupSwagger}  from "./config/swagger.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express()
setupSwagger(app);
app.use(cors())
app.use(express.json())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL
const DATABASE_URL_LOCAL = process.env.DATABASE_URL_LOCAL

// connectDB(DATABASE_URL_LOCAL)
connectDB(DATABASE_URL)



app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server listening at port  ${port}`);
})
