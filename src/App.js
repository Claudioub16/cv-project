import "./styles/style.css";
import { DataProvider } from "./DataContext.js";
import CVForm from "./components/CVForm.js";
import CV from "./components/CV.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <DataProvider>
        <Route path="/" exact component={CVForm} />
        <Route path="/cv" exact component={CV} />
      </DataProvider>
    </Router>
  );
}

export default App;
