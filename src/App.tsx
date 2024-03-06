import "primereact/resources/themes/lara-dark-indigo/theme.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MenuItem } from "primereact/menuitem";
import lazyComponent from "./utils/lazy";
import { lazy } from "react";

const Home = lazy(() => import("./media/icon/home.svg"));
const FileEdit = lazy(() => import("./media/icon/file-edit.svg"));
const QuestionCircle = lazy(() => import("./media/icon/question-circle.svg"));

const Menubar = lazy(() =>
  import("primereact/menubar").then((module) => ({ default: module.Menubar }))
);
const Footer = lazy(() => import("./components/Footer/Footer"));
const HomePage = lazyComponent(() => import("./pages/HomePage/HomePage"));
const GeneratorPage = lazyComponent(
  () => import("./pages/GeneratorPage/GeneratorPage")
);
const HowToPage = lazyComponent(() => import("./pages/HowToPage/HowToPage"));

const itemRenderer = (item: MenuItem) => (
  <Link
    to={item.url}
    unstable_viewTransition
    className="flex align-items-center p-menuitem-link"
  >
    <span>{item.icon()}</span>
    <span>{item.label}</span>
  </Link>
);

const items: MenuItem[] = [
  {
    id: "home-menu-button",
    label: "Home",
    url: "./",
    icon: () => <Home width={24} height={24} fill="white" />,
    template: itemRenderer,
  },
  {
    id: "generator-menu-button",
    label: "Generator",
    url: "./generator",
    icon: () => <FileEdit width={24} height={24} fill="white" />,
    template: itemRenderer,
  },
  {
    id: "how-to-menu-button",
    label: "How To",
    url: "./how-to",
    icon: () => <QuestionCircle width={24} height={24} fill="white" />,
    template: itemRenderer,
  },
];

const pageClassName = "max-w-screen-xl";

const App = () => {
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
