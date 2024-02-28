import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GeneratorPage from "./pages/GeneratorPage/GeneratorPage";
import HowToPage from "./pages/HowToPage/HowToPage";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import Footer from "./components/Footer/Footer";

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
      <div className="flex flex-column gap-3">
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
