import Express from 'express'
import morgan from 'morgan'
import router from './router';

const app = Express();

app.use(morgan('dev'))
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

app.use('/api',router)

export default app;
