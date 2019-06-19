import { Negotiation } from "./Negotiation";

export class NegotiationList {

    private negotiations: Negotiation[] = [];

    add(negotiation: Negotiation): void {
        this.negotiations.push(negotiation);
    }

    toArray(): Negotiation[] {
        return ([] as Negotiation[]).concat(this.negotiations);
    }

    calculateVolume(): number {
        return this.negotiations.reduce((total, negotiation) => (total + negotiation.calculateVolume()), 0.0);
    }

}