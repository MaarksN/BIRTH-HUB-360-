import { Router, Request, Response } from 'express';

const router = Router();

import { forwardToAI } from "../lib/ai-bridge";
//
};

router.post('/:tool', async (req: Request, res: Response) => {
    const { tool } = req.params;
    const result = await forwardToAI(tool, req.body);
    res.json(result);
});

export default router;
