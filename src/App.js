import "./scss/style.scss";
import { DataProvider } from "./DataContext.js";
import CVForm from "./components/CVForm.js";
import CV from "./components/CV.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <DataProvider>
        <Route path="/cv-project" exact component={CVForm} title="Editor" />
        <Route exct path="/cv-project/cv" component={CV} />
      </DataProvider>
    </Router>
  );
}

export default App;
