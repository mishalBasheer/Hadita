import express from 'express';
import logger from 'morgan';
import path from 'path';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';

import userRoutes from './route/userRoutes.js';
import adminRoutes from './route/adminRoutes.js';
import authRoutes from './route/authRoutes.js';


const app = express();
const __dirname = path.resolve();

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// app.use(cookieParser());
// app.use(
//   session({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true,
//     cookie: { maxAge: 24 * 60 * 60 * 1000 },
//   })
// );
// // Cache removing .................
// app.use((req, res, next) => {
//   res.set('Cache-control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//   next();
// });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public/')));
// app.use(flash());

app.use('/', userRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// 404 handling middleware
app.use((req, res, next) => {
    res.status(404).render('user/error-404');
});

export default app;