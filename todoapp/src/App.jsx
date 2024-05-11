import InlıneComponent from "./Components/InlineComponent";
import Todo from "./Components/Todo";
import OutlineComponent from "./Components/OutlineComponent";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <InlıneComponent />
      <OutlineComponent />
    </div>
  );
}

export default App;
