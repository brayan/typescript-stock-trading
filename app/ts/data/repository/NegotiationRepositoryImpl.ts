import { Negotiation } from "../../domain/model/index";
import { NegotiationRepository } from "../../domain/repository/NegotiationRepository";
import { NegotiationService } from "../service/NegotiationService";

export class NegotiationRepositoryImpl implements NegotiationRepository {

    private negotiationService = new NegotiationService();

    async getNegotiations(): Promise<Negotiation[]> {

        return this.negotiationService.getNegotiations()
            .then(data => data.map(item => new Negotiation(new Date(), item.vezes, item.montante)));
    }

}