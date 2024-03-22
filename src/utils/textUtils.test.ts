import { render } from "@testing-library/react";
import { isOverflown, resizeText } from "./textUtils";

it('should calculate isOverflown', async () => {
    expect(isOverflown(1, 2)).toBeTruthy();
    expect(isOverflown(2, 1)).toBeFalsy();
    expect(isOverflown(1, 1)).toBeFalsy();
});