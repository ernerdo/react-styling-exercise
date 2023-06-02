import { Card } from "./components";
import "./App.css";
import { persons } from "./data/persons";

function App() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
        {persons.length > 0 ? (
          persons.map((person, index) => {
            return <Card person={person} key={index} />;
          })
        ) : (
          <p>No data</p>
        )}
      </div>
    </div>
  );
}

export default App;
