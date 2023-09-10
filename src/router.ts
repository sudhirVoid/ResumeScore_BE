import {Router} from 'express'
import client from './db';


const router: Router = Router();

/* 
    Job Posting API ---- only available for HR or we can say Admin

 */

router.post('/jobPost',async (req, res)=>{
    const result = await client.query('SELECT * FROM qualifications')
    res.status(200).json(
        {
            data: result.rows
        },
        )
})

export default router;