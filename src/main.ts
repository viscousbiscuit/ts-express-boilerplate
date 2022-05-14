import 'dotenv/config'
import express from 'express';
import home from './api/routes/home.js';

const app = express();
const port = process.env.PORT

app.use(home);

app.listen(port);