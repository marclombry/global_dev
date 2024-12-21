export class QuoteDataSource {
    [x: string]: any;
    private data: any[] = [];

    public async fetchData(): Promise<any[]> {
        // Logic to retrieve data from an external source
        return this.data;
    }

    public async saveData(item: any): Promise<void> {
        // Logic to save data to an external source
        this.data.push(item);
    }
}