import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import "./components/stylesheets/global.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
