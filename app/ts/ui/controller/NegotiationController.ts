import { Negotiation, NegotiationList } from "../../domain/model/index";
import { DateHelper } from "../../domain/helper/DateHelper";
import { NegotiationRepository } from "../../domain/repository/NegotiationRepository";
import { NegotiationListView, MessageView } from "../view/index";
import { domInject } from "../helper/decorator/domInject";
import { QueryHelper } from "../helper/QueryHelper";
import { throttle } from "../helper/throttle";

export class NegotiationController {

    @domInject("#date")
    private inputDate: HTMLInputElement;

    @domInject("#numberOfStocks")
    private inputNumberOfStocks: HTMLInputElement;

    @domInject("#value")
    private inputValue: HTMLInputElement;

    private negotiationsView: NegotiationListView;
    private messageView: MessageView;

    private negotiations = new NegotiationList();

    constructor(private repository: NegotiationRepository) {
        this.setUpViews();
        this.updateNegotiations();
    }

    @throttle()
    onClickAdd(): void {
        const negotiation = this.createNegotiation();

        if (DateHelper.isWeekendDay(negotiation.date.getDay())) {
            this.messageView.update("Only week days!");
            return;
        }
        
        this.addNegotiation(negotiation);
    }

    @throttle()
    async onClickImport() {
        try {
            const negotiations = await this.repository.getNegotiations();
            negotiations.forEach(element => this.addNegotiation(element));
        } catch(error) {
            console.log(error.message)
            this.messageView.update("An error occurred when importing negotiations.");
        }
    }

    private addNegotiation(negotiation: Negotiation): void {
        this.negotiations.add(negotiation);
        this.messageView.update("Negotiation added!");
        this.updateNegotiations();
    }

    private setUpViews(): void {
        this.negotiationsView = new NegotiationListView(QueryHelper.querySelector("#negotiationListView"));
        this.messageView = new MessageView(QueryHelper.querySelector("#messageView"));
    }

    private createNegotiation(): Negotiation {
        const date = new Date(this.inputDate.value.replace(/-/g, ','));
        const numberOfStocks = parseInt(this.inputNumberOfStocks.value);
        const value = parseFloat(this.inputValue.value);

        return new Negotiation(date, numberOfStocks, value);
    }

    private updateNegotiations() {
        this.negotiationsView.update(this.negotiations);
    }

}