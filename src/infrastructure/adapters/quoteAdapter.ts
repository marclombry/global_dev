import { QuoteRepository } from '../../domain/repositories/quoteRepository';
import { QuoteEntity } from '../../domain/entities/quoteEntity';
import { QuoteDataSource } from '../data-sources/quoteDataSource';

export class QuoteAdapter implements QuoteRepository {
    private dataSource: QuoteDataSource;

    constructor(dataSource: QuoteDataSource) {
        this.dataSource = dataSource;
    }
    findAll(): Promise<QuoteEntity[]> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async findById(id: string): Promise<QuoteEntity | null> {
        const data = await this.dataSource.getDataById(id);
        return data ? new QuoteEntity(data.id, data.name) : null;
    }

    async save(entity: QuoteEntity): Promise<void> {
        await this.dataSource.saveData(entity);
    }

}