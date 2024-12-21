import { Request, Response } from 'express';
import { QuoteUseCase } from '../../application/usecases/quoteUseCase';

export class HomeController {
    [x: string]: any;
    private quoteUseCase: QuoteUseCase;

    constructor(quoteUseCase: QuoteUseCase) {
        this.quoteUseCase = quoteUseCase;
    }

    public async handleRequest(req: Request, res: Response): Promise<void> {
        try {
            const result = await this.quoteUseCase.execute(req.body);
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }
    
}