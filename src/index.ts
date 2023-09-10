import * as dotenv from 'dotenv'
import app from './server'
import client from './db'

dotenv.config()


try {
    (async ()=>{
        await client.connect()
    })();
    console.log("DB CONNECTED SUCCESSFULLY")
} catch (error) {
    console.log("Cannot connect DB")
}

app.listen(3000, ()=>{
    console.log("Server Started")
})