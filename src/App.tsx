import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuItem } from "primereact/menuitem";
import { lazy } from "react";

const Menubar = lazy(() =>
  import("primereact/menubar").then((module) => ({ default: module.Menubar }))
);
const Footer = lazy(() => import("./components/Footer/Footer"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const GeneratorPage = lazy(() => import("./pages/GeneratorPage/GeneratorPage"));
const HowToPage = lazy(() => import("./pages/HowToPage/HowToPage"));

const App = () => {
  const items: MenuItem[] = [
    {
      id: "home-menu-button",
      label: "Home",
      url: "/",
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
      <div className="flex flex-col gap-3 mx-4">
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
