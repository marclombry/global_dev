import express from 'express';
import { HomeController } from './interfaces/controllers/homeController';
import { QuoteUseCase } from './application/usecases/quoteUseCase';
import { InMemoryQuoteRepository } from './infrastructure/repositories/inMemoryQuoteRepository';

const app = express();
const port = process.env.PORT || 3000;

const quoteRepository = new InMemoryQuoteRepository();
const quoteUseCase = new QuoteUseCase(quoteRepository);
const homeController = new HomeController(quoteUseCase);

app.use(express.json());

app.get('/', (req, res) => {
    homeController.handleRequest(req, res);
});

app.post('/', (req, res) => {
    homeController.handleRequest(req, res);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});