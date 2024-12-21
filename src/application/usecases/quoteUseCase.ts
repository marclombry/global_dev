

import { QuoteEntity } from '../../domain/entities/quoteEntity';
import { QuoteRepository } from '../../domain/repositories/quoteRepository';

export class QuoteUseCase {
    private QuoteRepository: QuoteRepository;

    constructor(QuoteRepository: QuoteRepository) {
        this.QuoteRepository = QuoteRepository;
    }

    public async execute(data: any): Promise<QuoteEntity | null> {
        // Business logic for the use case
        const quoteEntity = new QuoteEntity(data.id, data.name);
        await this.QuoteRepository.save(quoteEntity);
        return quoteEntity;
    }
}