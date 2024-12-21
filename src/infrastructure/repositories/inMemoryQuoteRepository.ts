// src/repositories/quoteRepository.ts
import { QuoteEntity } from '../../domain/entities/quoteEntity';
import { QuoteRepository } from '../../domain/repositories/quoteRepository';

export class InMemoryQuoteRepository implements QuoteRepository {
    private quotes: QuoteEntity[] = [];

    async findById(id: string): Promise<QuoteEntity | null> {
        return this.quotes.find(quote => quote.getId() === id) || null;
    }

    async findAll(): Promise<QuoteEntity[]> {
        return this.quotes;
    }

    async save(entity: QuoteEntity): Promise<void> {
        this.quotes.push(entity);
    }

    async delete(id: string): Promise<void> {
        this.quotes = this.quotes.filter(quote => quote.getId() !== id);
    }
}
