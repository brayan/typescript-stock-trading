export class QueryHelper {

    static querySelector(query: string): Element {
        const element = document.querySelector(query);

        if (element) {
            return element;
        }

        const error = new Error(`Invalid query: ${query}`);
        console.error(error);
        throw error;
    }

}