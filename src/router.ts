import { RequestHandler, Router, Request, Response } from 'express'
import client from './db';


const router: Router = Router();

/* 
    Job Posting API ---- only available for HR or we can say Admin

 */
router.get('/getJobPost', (async (req: Request, res: Response) => {

    const sql = `
    select
    j.id,j.companyname ,j.companywebsite ,j.experience ,j2.categoryname ,j.jobdescription ,j.joblocation ,j.jobtitle ,
    j3.jobtype ,q.qualification ,j.salaryrange, j.createdat
    from jobposts j 
    inner join
    qualifications q 
    on j.qualification  = q.id 
    inner join jobcategories j2 
    on j2.id = j.jobcategory 
    inner join 
    jobtypes j3 
    on j3.id = j.jobtype 
    `

    try {
        const result = await client.query(sql)
        console.log(result)
        res.status(200).json({data: result.rows})
    } catch (error) {
        res.status(500).json({error: "Sorry we got into some problem."})
    }

}) as RequestHandler)

router.post('/jobPost',(async (req: Request, res: Response)=>{

    try {
            // Define the SQL query with placeholders
    const sql = `
    INSERT INTO jobposts (
      companyName, companyWebsite, jobTitle, jobCategory, jobType,
      jobLocation, salaryRange, experience, qualification,
      applicationDeadline, jobDescription
    )
    VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
    )
  `;
  // Execute the query with the provided data
  await client.query(sql, [
      req.body.companyName,
    req.body.companyWebsite,
    req.body.jobTitle,
    req.body.jobCategory,
    req.body.jobType,
    req.body.jobLocation,
    req.body.salaryRange,
    req.body.experience,
    req.body.qualification,
    req.body.applicationDeadline,
    req.body.jobDescription,
    ]);
console.log("Successfully Inserted.")
  res.status(200).json(
      {
          msg: "Successfully Inserted."
      }
  )
    } catch (error) {
        console.error('Error inserting job posting: ', error);
        res.status(500).json({error: 'An error occured while posting the job.'})
    }


}) as RequestHandler)

router.get('/jobCategory', (async (req, res)=>{
    const result = await client.query('SELECT * FROM jobcategories')
    res.status(200).json(
        {
        data: result.rows
        },
        )
}) as RequestHandler)

router.get('/qualifications', (async (req, res)=>{
    const result = await client.query('SELECT * FROM qualifications')
    res.status(200).json(
        {
            data: result.rows
        },
        )
}) as RequestHandler)

router.get('/jobTypes', (async (req, res)=>{
    try {
        const result = await client.query('SELECT * FROM jobtypes')
        res.status(200).json(
            {
                data: result.rows
            },
            )
    } catch (error) {
        
    }

}) as RequestHandler)

export default router;