import TemplateOption from "../../model/TemplateOption";
import exploding_cats_icon from 'Pictures/exploding_cats_icon.png';
import exploding_cats_image from 'Pictures/exploding_cats_image.jpg';
import basic_image from 'Pictures/basic_image.jpg';
import dnd_spell_card_image from 'Pictures/dnd_spell_card_image.jpg';
import boom_role_image from 'Pictures/boom_role_image.jpg';
import bang_shell from 'Pictures/bang_shell.png';

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
            Image_Source: basic_image,
            Title: "Soft Kitty",
            Description:
                "A soft kitty is a gentle and plush feline, often characterized by its fluffy fur and soothing purr.",
        },
    },
    {
        label: "BOOM! - Character",
        name: "boom-character.html",
        defaultValues: {
            Title: "Dealer Dave",
            Description: "Creates the best card games.",
            Image_Source: boom_role_image,
            health: ("<img class=\"_boom-character-shell\" src=" + bang_shell + " />").repeat(3)
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
        label: "D&D Spell Card",
        name: "dnd_spell_card_template.html",
        defaultValues: {
            Image_Source: dnd_spell_card_image,
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
];

export default templateOptions;
