import express from 'express';
import {showLogin,} from '../controllers/authControllers.js'

const router = express.Router();

router.route('/login').get(showLogin);

export default router;