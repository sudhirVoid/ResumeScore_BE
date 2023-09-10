import {Router} from 'express'


const router: Router = Router();

/* 
    Job Posting API ---- only available for HR or we can say Admin

 */

router.post('/jobPost',(req, res)=>{
    res.status(200).json({message: "Job post API"})
})

export default router;