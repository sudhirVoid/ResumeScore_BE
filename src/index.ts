import * as dotenv from 'dotenv'
import app from './server'

dotenv.config()

app.listen(3000, ()=>{
    console.log("Server Started")
})