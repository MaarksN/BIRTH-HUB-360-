import { Router, Request, Response } from 'express';

const router = Router();

const forwardToAI = async (endpoint: string, data: any) => {
    console.log(`Forwarding to Python AI: ${endpoint}`, data);
    return { status: 'forwarded', endpoint, data };
};

router.post('/:tool', async (req: Request, res: Response) => {
    const { tool } = req.params;
    const result = await forwardToAI(tool, req.body);
    res.json(result);
});

export default router;
