import { TabPanel, TabView } from "primereact/tabview";

const HowToPage = () => {
  return (
    <div className="flex flex-wrap flex-col justify-center content-center items-center">
      <TabView className="max-w-screen-xl">
        <TabPanel header="Basic Mode">
          <p>
            The basic mode serves as a delightful demo, a sneak peek into the
            world of personalized cards. While it doesn’t encompass the full
            range of features, it’s perfect for quick experimentation and
            showcasing the possibilities.
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
              <b>Add to Print</b>: Click “Add to Print” for each card you
              create.
            </li>
            <li>
              <b>Repeat</b>: Customize and add more cards as needed.
            </li>
            <li>
              <b>Print</b>: Click “Print” to print the page or download a PDF.
            </li>
          </ul>
          Use the “Clear Prints” button to start fresh.
        </TabPanel>
      </TabView>
    </div>
  );
};

export default HowToPage;
