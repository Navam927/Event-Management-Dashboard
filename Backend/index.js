import express from 'express';
import { connectDB } from './config/connectDB.js';
import userRouter from './routes/userRoute.js';

const PORT = 5000

const app = express();
app.use(express.json());

app.use('/api/user', userRouter);


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}/`);
})

app.get('/', (req, res) => {
    res.send('API chal raha hai');
})

connectDB();


