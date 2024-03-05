import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuItem } from "primereact/menuitem";
import { lazy } from "react";
import Home from "./media/icon/home.svg";

const Menubar = lazy(() =>
  import("primereact/menubar").then((module) => ({ default: module.Menubar }))
);
const Footer = lazy(() => import("./components/Footer/Footer"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const GeneratorPage = lazy(() => import("./pages/GeneratorPage/GeneratorPage"));
const HowToPage = lazy(() => import("./pages/HowToPage/HowToPage"));

const pageClassName = "max-w-screen-xl";

const App = () => {
  const items: MenuItem[] = [
    {
      id: "home-menu-button",
      label: "Home",
      url: "/",
      icon: () => <Home width={24} height={24} />,
    },
    {
      id: "generator-menu-button",
      label: "Generator",
      url: "/generator",
    },
    {
      id: "how-to-menu-button",
      label: "How To",
      url: "/how-to",
    },
  ];

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center gap-3 mx-4">
        <Menubar className="no-print w-full" model={items} />

        <Routes>
          <Route path="/" element={<HomePage className={pageClassName} />} />
          <Route
            path="/generator"
            element={<GeneratorPage className={pageClassName} />}
          />
          <Route
            path="/how-to"
            element={<HowToPage className={pageClassName} />}
          />
        </Routes>

        <Footer className="no-print w-full" />
      </div>
    </BrowserRouter>
  );
};

export default App;
