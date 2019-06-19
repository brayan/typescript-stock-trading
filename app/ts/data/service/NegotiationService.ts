export class NegotiationService {

    async getNegotiations(): Promise<NegotiationResponse[]> {
        return fetch("http://localhost:8080/dados")
            .then(response => checkResponse(response))
            .then(response => response.json());
    }

}

function checkResponse(response: Response) {
    if (response.ok) {
        return response;
    }
    throw new Error(response.statusText);
}