import { Button } from "primereact/button";
import { PrimeReactProvider } from "primereact/api";
import "./App.scss";

const App = () => {
  return (
    <PrimeReactProvider>
      <h1>Hello</h1>
      <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" />
      </div>
    </PrimeReactProvider>
  );
};

export default App;
