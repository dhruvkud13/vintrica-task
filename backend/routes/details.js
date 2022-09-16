import express from 'express'
import {details} from '../controllers/details.js'
const router=express.Router();

router.post('/',details);
export default router;