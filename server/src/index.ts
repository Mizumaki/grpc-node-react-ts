import express, { Request, Response } from 'express';
const app = express();

app.get('/', (_req: Request, res: Response) => res.send('Hello Parcel!'));

app.listen(3000, () => console.log('App listening on http://localhost:3000'));
