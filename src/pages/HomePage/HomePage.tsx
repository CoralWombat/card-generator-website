import DefaultComponentProps from "../../model/DefaultComponentProps";
import "./HomePage.scss";

const HomePage = ({ className }: DefaultComponentProps) => {
  return (
    <div
      className={
        className + " text-center flex flex-wrap flex-col content-center"
      }
    >
      <h1>Cad of Cards</h1>
      <h2 className="flex justify-center flex-wrap gap-2">
        <div>{"The website for prototyping your cards "}</div>
        <div className="rainbow_text_animated">{"effortlessly"}</div>
      </h2>
      <div className="text-left">
        <p>
          Welcome to Cad of Cards, the ultimate online tool for creating your
          own card games and board games! 🃏🎲👏
        </p>
        <p>With Cad of Cards, you can:</p>
        <ul>
          <li>
            Generate cards by choosing from our pre-made templates or uploading
            your own. 🖼️📁
          </li>
          <li>
            Create multiple cards at once by uploading a CSV file with your card
            data. 📊🗂️
          </li>
          <li>
            Download your cards in PDF format or print them directly from the
            website. 📥🖨️
          </li>
        </ul>
        <p>
          Whether you want to make a trivia game, a role-playing game, or a
          party game, Cad of Cards has you covered. You can customize your cards
          with different fonts, colors, images, and icons. 😍🎨🖌️ You can also
          preview your cards before printing them. 🔍👀
        </p>
        <p>
          Cad of Cards is easy to use, fun to play, and free to try. So what are
          you waiting for? Start creating your own card games and board games
          today with Cad of Cards! 🙌🎉🎁
        </p>
      </div>
    </div>
  );
};

export default HomePage;
