![GitHub repo size](https://img.shields.io/github/repo-size/CoralWombat/card-generator-website)
![GitHub Tag](https://img.shields.io/github/v/tag/CoralWombat/card-generator-website?label=version)
![Code Coverage](/badges/coverage-lines.svg)

# Forge of Cards

## Setting Up Local Environment
To set up your local environment, you need to do the following steps:
1. Clone the repository
2. In the root folder, run `npm run install`
3. To run the localserver, run `npm run serve`
4. To run the tests, run `npm run test`
5. To build, run `npm run build`

To analyze the bundle, first run a build, then check the `dist\report.html` file.

To check the test coverage, first run the tests, the check the `coverage\lcov-report\index.html` file.

## Adding New Template
To add a new template to the templates dropdown in the generate page, you need to do the following steps:
1. Create a `.html` card as a template using the [Mustache](https://mustache.github.io/) template engine rules (see the how-to page of the site for more info)
2. Copy your `.html` file to the `src\templates` directory with an appropriate name
3. Add the new template to the `src\components\constants\TemplateOptions.ts` file to the `templateOptions` list.
   - The `label` is the text that is displayed in the dropdown
   - The `name` is the name of the file
   - The `defaultValues` is an object, that contains the parameters of the template as keys and the values are the default values of the template

After you've done the previous steps, the new template should appear in the dropdown.