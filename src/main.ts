import express from 'express';
import config from 'config';
import { startServer } from './helpers/v1.helper';


const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import root from './routers/root'
app.use('/', root);


startServer(app, port, host);