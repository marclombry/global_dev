import { QuoteEntity } from "../entities/quoteEntity";

export interface QuoteRepository {
    findById(id: string): Promise<QuoteEntity | null>;
    findAll(): Promise<QuoteEntity[]>;
    save(entity: QuoteEntity): Promise<void>;
    delete(id: string): Promise<void>;
}