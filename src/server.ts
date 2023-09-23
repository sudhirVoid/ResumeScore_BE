import Express from 'express'
import morgan from 'morgan'
import router from './router';
import cors from 'cors';


const app = Express();

app.use(morgan('dev'))
app.use(Express.json())
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    next();
})
app.use(cors({
    origin: true,
}))
app.use(Express.urlencoded({extended: true}))

app.use('/api',router)

export default app;
