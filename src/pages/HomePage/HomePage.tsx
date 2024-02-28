import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="text-center flex flex-column justify-content-center align-content-center flex-wrap">
      <h1>Cad of Cards</h1>
      <h2 className="flex justify-content-center flex-wrap gap-2">
        <div>{"The website for prototyping your cards "}</div>
        <div className="rainbow rainbow_text_animated">{"effortlessly"}</div>
      </h2>
      <div className="text-left" style={{ maxWidth: "60rem" }}>
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
