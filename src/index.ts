import express, { Request, Response } from 'express';
import { incident_router } from './routes/incident.route';
import cors from 'cors';

const app: express.Application = express();


app.use(express.json());
app.use(cors());

const PORT: number = Number(process.env.PORT) || 5000;


app.get('/', (req: Request, res: Response) => {

    res.send('Hello World!')
}
)

app.use('/incidents', incident_router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


