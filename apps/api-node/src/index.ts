import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import ldrRoutes from './routes/ldr';
import bdrRoutes from './routes/bdr';
import sdrRoutes from './routes/sdr';
import aeRoutes from './routes/ae';
import onboardingRoutes from './routes/onboarding';
import csRoutes from './routes/cs';
import supportRoutes from './routes/support';
import revopsRoutes from './routes/revops';
import headRoutes from './routes/head';
import croRoutes from './routes/cro';
import growthRoutes from './routes/growth';

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
app.use('/api/onboarding', onboardingRoutes);
app.use('/api/cs', csRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/revops', revopsRoutes);
app.use('/api/head', headRoutes);
app.use('/api/cro', croRoutes);
app.use('/api/growth', growthRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Birth Hub Innovation 360 Orchestrator Running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'orchestrator' });
});

app.listen(PORT, () => {
  console.log(`Orchestrator running on port ${PORT}`);
});
