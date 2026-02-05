import { Router, Request, Response } from 'express';

const router = Router();

// Middleware to forward to Python Service (Placeholder)
import { forwardToAI } from "../lib/ai-bridge";
//
};

// 1. Mapeamento de Buying Committee
router.post('/map-buying-committee', async (req: Request, res: Response) => {
    const result = await forwardToAI('map-buying-committee', req.body);
    res.json(result);
});

// Generic handler for other BDR tools
router.post('/:tool', async (req: Request, res: Response) => {
    const { tool } = req.params;
    const result = await forwardToAI(tool, req.body);
    res.json(result);
});

export default router;
