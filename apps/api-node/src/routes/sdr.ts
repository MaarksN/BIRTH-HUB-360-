import { Router, Request, Response } from 'express';

const router = Router();

// Middleware to forward to Python Service (Placeholder)
const forwardToAI = async (endpoint: string, data: any) => {
    // In production, this would use axios/fetch to call the Python Service
    console.log(`Forwarding to Python AI: ${endpoint}`, data);
    return { status: 'forwarded', endpoint, data };
};

// 1. Lead Scoring Comportamental
router.post('/lead-scoring', async (req: Request, res: Response) => {
    const result = await forwardToAI('lead-scoring', req.body);
    res.json(result);
});

// Generic handler for other SDR tools
router.post('/:tool', async (req: Request, res: Response) => {
    const { tool } = req.params;
    const result = await forwardToAI(tool, req.body);
    res.json(result);
});

export default router;
