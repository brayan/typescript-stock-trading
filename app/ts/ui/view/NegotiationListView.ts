import { BaseView } from "./BaseView";
import { NegotiationList } from "../../domain/model/NegotiationList";
import { DateHelper } from "../../domain/helper/DateHelper";

export class NegotiationListView extends BaseView<NegotiationList> {

    protected template(negotiations: NegotiationList): string {

        return (`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>NUMBER OF STOCKS</th>
                    <th>VALUE</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            ${
            negotiations.toArray().map(negotiation =>
                `
                        <tr>
                            <td>${DateHelper.toShortDate(negotiation.date)}</td>
                            <td>${negotiation.numberOfStocks}</td>
                            <td>${negotiation.value}</td>
                            <td>${negotiation.calculateVolume()}</td>
                        </tr>
                    `
            ).join("")
            }
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                ${negotiations.calculateVolume()}
                </td>
            </tfoot>
        </table> 
        `);
    }



}