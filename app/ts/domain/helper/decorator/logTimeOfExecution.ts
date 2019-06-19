export function logTimeOfExecution(inSeconds = false) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            let unit = "ms";
            let divider = 1;

            if (inSeconds) {
                unit = "s";
                divider = 1000;
            }

            console.log("-----------");
            console.log(`Params of ${propertyKey}: ${JSON.stringify(args)}`);

            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();

            console.log(`Return of ${propertyKey}: ${JSON.stringify(result)}`);
            console.log(`${(t2 - t1) / divider} ${unit} of execution`);

            return result;
        }

        return descriptor;
    }

}