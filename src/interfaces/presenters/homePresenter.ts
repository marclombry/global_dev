export class HomePresenter {
    format(data: any): any {
        // Format the data for the user interface
        return {
            // Example formatting
            id: data.id,
            name: data.name,
            createdAt: data.createdAt.toISOString(),
        };
    }

    present(data: any): any {
        // Present the formatted data
        return this.format(data);
    }
}