import { TabPanel, TabView } from "primereact/tabview";
import DefaultComponentProps from "../../model/DefaultComponentProps";

const HowToPage = ({ className }: DefaultComponentProps) => {
  return (
    <TabView className={className + " flex flex-col"}>
      <TabPanel header="Basic Usage">
        <h1>Basic Usage</h1>
        <p>
          This section serves as a delightful demo, a sneak peek into the world
          of personalized cards. While it doesn’t encompass the full range of
          features, it’s perfect for quick experimentation and showcasing the
          possibilities.
        </p>
        <ul>
          <li>
            <b>Choose a Template</b>: Select a card template from the dropdown
            menu.
          </li>
          <li>
            <b>Fill in Parameters</b>: Customize the card by adding relevant
            information.
          </li>
          <li>
            <b>Add to Print</b>: Click “Add to Print” for each card you create.
          </li>
          <li>
            <b>Repeat</b>: Customize and add more cards as needed.
          </li>
          <li>
            <b>Print</b>: Click “Print” to print the page or download a PDF.
          </li>
        </ul>
        <p>Use the “Clear Prints” button to start fresh.</p>
      </TabPanel>
      <TabPanel header="Uploading Own Data">
        <h1>Uploading Own Data</h1>
        <p>
          If you have cards whose details often change, it's helpful to upload
          that information yourself. This part of the guide will show you how to
          create data in a way that the website can easily process and use to
          update your card information automatically.
        </p>
        <h2>Composing The Data</h2>
        <p>
          To upload your data, you should make a .csv file. If you're not
          familiar with .csv files, it's not a problem. You can use Microsoft
          Excel or Google Sheets, as both have options to save your files in the
          .csv format. Here are the specific rules for your .csv file:
        </p>
        <ul>
          <li>
            The names of the parameter fields should be listed on the first
            line.
          </li>
          <li>The fields must be separated by comma.</li>
        </ul>
        <h2>Uploading Your Data</h2>
        <ul>
          <li>
            <b>Choose a Template</b>: Select a card template from the dropdown
            menu.
          </li>
          <li>
            <b>Upload Data</b>: Click "Upload Data" and choose your data file.
          </li>
        </ul>
      </TabPanel>
      <TabPanel header="Create Your Own Template">
        <h1>Create Your Own Template</h1>
        <p>
          <i>
            Prerequisites: knowledge in <b>HTML</b> and <b>CSS</b>.
          </i>
        </p>
        <p>To create your own template, you need to create a HTML element:</p>
        <ul>
          <li>
            To indicate parameters, place them inside double curly brackets like
            this: &#123;&#123;Parameter&#125;&#125;.
          </li>
          <li>
            Avoid using CSS ids and classes as they may impact the entire
            webpage. Instead, opt for the style HTML tag for styling elements.
          </li>
          <li>
            For text to adjust its size automatically, assign the class
            .text-autosized-container to the text’s container and
            .text-autosized to the span element surrounding the text. The text
            will scale up to the maximum font size specified in the container.
          </li>
          <li>
            When you need to use a parameter in its original form (such as in
            URLs), add an ampersand before the parameter’s name like so:
            &#123;&#123;&Parameter&#125;&#125;.
          </li>
        </ul>
        <p>
          The page is designed using the Mustache template system. You can find
          more details by checking the{" "}
          <a href="https://mustache.github.io/" target="_blank">
            Mustache documentation
          </a>
          .
        </p>
      </TabPanel>
    </TabView>
  );
};

export default HowToPage;
