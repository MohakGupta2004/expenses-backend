import { Router } from "express";
const router = Router()

router.get('/expense', (req, res)=>{
    // Lists all the expenses of the logged-in user, with options for filtering by date ranges.
//     Filters:
// Past week: GET /expenses?filter=past_week
// Last month: GET /expenses?filter=last_month
// Last 3 months: GET /expenses?filter=last_3_months
// Custom Date Range: GET /expenses?start_date=YYYY-MM-DD&end_date=YYYY-MM-DD

})
router.post("/expense", (req, res)=>{
    // Add a new expense entry.
})
router.put('/expenses/:id', (req, res)=>{

})
router.delete('/expenses/:id', (req, res)=>{
    
})
export default router