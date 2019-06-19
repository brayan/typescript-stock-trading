import { QueryHelper } from "../QueryHelper";

export function domInject(selector: string) {
    return function(target: any, key: string) {
        let element: Element;
        const getter = function() {

            if (!element) {
                element = QueryHelper.querySelector(selector);
            }

            return element;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}