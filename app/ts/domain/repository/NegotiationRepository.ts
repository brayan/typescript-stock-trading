import { Negotiation } from "../model/index";

export interface NegotiationRepository {
    getNegotiations(): Promise<Negotiation[]>
}