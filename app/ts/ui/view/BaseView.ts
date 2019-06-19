import { logTimeOfExecution } from "../../domain/helper/decorator/logTimeOfExecution";

export abstract class BaseView<T> {

    constructor(private element: Element, private scape = true) { }

    protected abstract template(viewModel: T): string;

    @logTimeOfExecution(true)
    update(viewModel: T): void {
        let template = this.template(viewModel);

        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
        }

        this.element.innerHTML = template;
    }

}