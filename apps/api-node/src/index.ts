import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import ldrRoutes from './routes/ldr';
import bdrRoutes from './routes/bdr';
import sdrRoutes from './routes/sdr';
import aeRoutes from './routes/ae';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/ldr', ldrRoutes);
app.use('/api/bdr', bdrRoutes);
app.use('/api/sdr', sdrRoutes);
app.use('/api/ae', aeRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Birth Hub Innovation 360 Orchestrator Running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'orchestrator' });
});

app.listen(PORT, () => {
  console.log(`Orchestrator running on port ${PORT}`);
});
