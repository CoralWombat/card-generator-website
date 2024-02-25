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
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Generator",
      icon: "pi pi-file-edit",
      url: "/generator",
    },
    {
      label: "How To",
      icon: "pi pi-question-circle",
      url: "/how-to",
    },
  ];
  return (
    <BrowserRouter>
      <Menubar model={items} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generator" element={<GeneratorPage />} />
        <Route path="/how-to" element={<HowToPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
