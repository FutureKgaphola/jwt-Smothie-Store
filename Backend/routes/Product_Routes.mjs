import express from 'express';
import { getAll, getOne, deleteOne, updateOne, creteOne } from '../Controllers/Products_Controller.mjs';
import reqAuth from '../middleware/authMiddleware.mjs';
const router = express.Router();

//get all
router.get('/smothies',reqAuth, getAll);

//get one
router.get('/smothies/:id', getOne);

//update one
router.patch('/smothies/:id', updateOne);

//delete one
router.delete('/smothies/:id', deleteOne);
//create one
router.post('/addsmothies', creteOne);

export default router;

