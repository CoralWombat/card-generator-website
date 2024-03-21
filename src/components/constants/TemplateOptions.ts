import TemplateOption from "../../model/TemplateOption";
import exploding_cats_icon from 'Pictures/exploding_cats_icon.png';
import exploding_cats_image from 'Pictures/exploding_cats_image.jpg';

export const customTemplateOption: TemplateOption = {
    label: "Custom Template",
    name: "custom_template",
    defaultValues: {},
};

const templateOptions: TemplateOption[] = [
    {
        label: "Basic Template",
        name: "basic-template.html",
        defaultValues: {
            Image_Source:
                "https://th.bing.com/th/id/OIG1.D7RIkM1p994fC1T1qVE8?w=1024&h=1024&rs=1&pid=ImgDetMain",
            Title: "Soft Kitty",
            Description:
                "A soft kitty is a gentle and plush feline, often characterized by its fluffy fur and soothing purr.",
        },
    },
    {
        label: "Cards Against Mankind - Black",
        name: "cards-against-mankind-black.html",
        defaultValues: {
            Text: "Best card game prototyping website: ______.",
        },
    },
    {
        label: "Cards Against Mankind - White",
        name: "cards-against-mankind-white.html",
        defaultValues: {
            Text: "Forge of Cards",
        },
    },
    {
        label: "Exploding Cats",
        name: "exploding-cats.html",
        defaultValues: {
            Title: "Play",
            Edition: "Forge of Cards",
            Rule: "design the best card game",
            Rule_Color: "black",
            Description: "by waking inner child",
            Color: "#80BE97",
            Icon_Source: exploding_cats_icon,
            Image_Source: exploding_cats_image
        },
    },
    {
        label: "D&D Spell Card",
        name: "dnd_spell_card_template.html",
        defaultValues: {
            Image_Source:
                "https://th.bing.com/th/id/OIG1.0LHNGA6aZmQso9rp9UVy?pid=ImgGn",
            Title: "Mage Armor",
            Level: "1st",
            Casting_Time: "1 Action",
            Range: "Touch",
            Duration: "8 Hours",
            Components: "V, S, M*",
            School: "Abjuration",
            Save: "None",
            Description:
                "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
        },
    },
];

export default templateOptions;
