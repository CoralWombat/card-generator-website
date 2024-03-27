import { sleepUntil } from "./timeoutUtils";

it("should wait until function returns true", async () => {
    let result = false;

    setTimeout(() => result = true, 100);

    expect(result).toBeFalsy();
    await sleepUntil(() => result, 1000);
    expect(result).toBeTruthy();
});

it("should wait until timeout", async () => {
    let result = false;

    setTimeout(() => result = true, 1000);

    expect(result).toBeFalsy();
    await sleepUntil(() => result, 500);
    expect(result).toBeFalsy();
});