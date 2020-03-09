import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import accessEnv from '#root/helpers/accessEnv';
import setupRoutes from './routes';

const PORT = accessEnv('PORT', 7100);

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

setupRoutes(app);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listings Service started on ${PORT}`);
});
