export const getTemplateByName = (templateName: string) => {
    return require("../templates/" + templateName).default;
}

export const getTemplateParameterNames = (template: string): string[] => {
    const regex = /{{\s*([^}\s]+)\s*}}/g;
    const matches = [...template.matchAll(regex)];
    const parameterNames = matches.map(match => match[1]);
    return parameterNames;
}