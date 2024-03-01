import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Footer from "./components/Footer/Footer";
import { lazy } from "react";
import { PrimeIcons } from "primereact/api";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const GeneratorPage = lazy(() => import("./pages/GeneratorPage/GeneratorPage"));
const HowToPage = lazy(() => import("./pages/HowToPage/HowToPage"));

const App = () => {
  const items: MenuItem[] = [
    {
      id: "home-menu-button",
      label: "Home",
      icon: PrimeIcons.HOME,
      url: "/",
    },
    {
      id: "generator-menu-button",
      label: "Generator",
      icon: PrimeIcons.FILE,
      url: "/generator",
    },
    {
      id: "how-to-menu-button",
      label: "How To",
      icon: PrimeIcons.QUESTION_CIRCLE,
      url: "/how-to",
    },
  ];

  return (
    <BrowserRouter>
      <div className="flex flex-column gap-3 mx-4">
        <Menubar className="no-print" model={items} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/how-to" element={<HowToPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
