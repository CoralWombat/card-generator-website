import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GeneratorPage from "./pages/GeneratorPage/GeneratorPage";
import HowToPage from "./pages/HowToPage/HowToPage";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

const App = () => {
  const items: MenuItem[] = [
    {
      id: "home-menu-button",
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      id: "generator-menu-button",
      label: "Generator",
      icon: "pi pi-file-edit",
      url: "/generator",
    },
    {
      id: "how-to-menu-button",
      label: "How To",
      icon: "pi pi-question-circle",
      url: "/how-to",
    },
  ];
  return (
    <BrowserRouter>
      <div className="flex flex-column gap-1">
        <Menubar model={items} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/how-to" element={<HowToPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
