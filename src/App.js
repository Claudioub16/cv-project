import "./scss/style.scss";
import { DataProvider } from "./DataContext.js";
import Editor from "./components/Editor/Editor.js";
import CV from "./components/CV.js";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <DataProvider>
          <Route path="/editor" exact component={Editor} title="Editor" />
          <Route exact path="/cv" component={CV} />
        </DataProvider>
      </Router>
      <Footer /> 
    </>
  );
}

export default App;
