export const sleepUntil = async (f: Function, timeoutMs: number) => {
    return new Promise<void>((resolve) => {
        const timeWas = new Date();
        const wait = setInterval(function () {
            if (f()) {
                clearInterval(wait);
                resolve();
            } else if (new Date().getTime() - timeWas.getTime() > timeoutMs) {
                clearInterval(wait);
                resolve();
            }
        }, 100);
    });
};