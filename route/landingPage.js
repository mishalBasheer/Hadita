import express from 'express';
import {showLanding} from '../controllers/landingPage.js'

const router = express.Router();

router.route('/').get(showLanding);

export default router;