import TemplateOption from "../../model/TemplateOption";

export const customTemplateOption: TemplateOption = {
    label: "Custom Template",
    name: "custom_template",
    defaultValues: {},
};

const templateOptions: TemplateOption[] = [
    {
        label: "Basic Template",
        name: "basic-template.html",
        defaultValues: {}
    },
    {
        label: "Basic Template 2",
        name: "basic-template-2.html",
        defaultValues: {}
    },
    {
        label: "D&D Spell Card",
        name: "dnd_spell_card_template.html",
        defaultValues: {
            Image_Source: "https://th.bing.com/th/id/OIG1.0LHNGA6aZmQso9rp9UVy?pid=ImgGn",
            Description_Scale: 1,
            Title: "Mage Armor",
            Level: "1st",
            Casting_Time: "1 Action",
            Range: "Touch",
            Duration: "8 Hours",
            Components: "V, S, M*",
            School: "Abjuration",
            Save: "None",
            Description: "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
        }
    },
];

export default templateOptions;