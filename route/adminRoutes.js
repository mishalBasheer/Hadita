import express from 'express';
import {showDashboard,} from '../controllers/adminController.js'

const router = express.Router();

router.route('').get(showDashboard);

export default router;