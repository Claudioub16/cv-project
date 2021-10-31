import "./scss/style.scss";
import { DataProvider } from "./DataContext.js";
import CVForm from "./components/CVForm.js";
import CV from "./components/CV.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <p>aaa</p>
      <DataProvider>
        <Route path="/cv-project" exact component={CVForm} />
        <Route path="/cv" exact component={CV} />
      </DataProvider>
    </Router>
  );
}

export default App;
