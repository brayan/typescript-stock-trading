import { BaseView } from "./BaseView";

export class MessageView extends BaseView<string> {

    protected template(message: string): string {
        return message ? `<p class="alert alert-info">${message}</p>` : "<p></p>";
    }

}