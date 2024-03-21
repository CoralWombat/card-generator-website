import "@testing-library/jest-dom";
import { getTemplateParameterNames } from "./templateUtils";

it("gets the template parameter names from template", async () => {
    const param0 = "PARAM_1";
    const param1 = "PARAM_2";

    const template = ["{{", param0, "}} is param1 and ", "{{&", param1, "}}."].join("");

    const templateParams = getTemplateParameterNames(template);

    expect(templateParams.length).toBe(2);
    expect(templateParams[0]).toBe(param0);
    expect(templateParams[1]).toBe(param1);
});

it("removes parameters that are used twice", async () => {
    const param0 = "PARAM_1";
    const param1 = "PARAM_2";

    const template = ["{{", param0, "}} is param1 and {{", param0, "}} is also param1, but {{&", param1, "}}."].join("");

    const templateParams = getTemplateParameterNames(template);

    expect(templateParams.length).toBe(2);
    expect(templateParams[0]).toBe(param0);
    expect(templateParams[1]).toBe(param1);
});
