import { Card } from "./components";
import "./App.css";

function App() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
