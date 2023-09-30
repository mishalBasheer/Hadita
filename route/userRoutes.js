import express from 'express';
import {showLanding,showContact} from '../controllers/userController.js'

const router = express.Router();

router.route('/').get(showLanding);
router.route('/contact').get(showContact);

export default router;