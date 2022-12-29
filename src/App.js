import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <main className={true ? "container" : ""}>
      <Wrapper />
    </main>
  );
}

export default App;
