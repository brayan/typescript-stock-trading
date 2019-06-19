export class Negotiation {

    constructor(readonly date: Date, readonly numberOfStocks: number, readonly value: number) {}

    calculateVolume(): number {
        return (this.numberOfStocks * this.value);
    }

}