import "./scss/style.scss";
import { DataProvider } from "./DataContext.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Editor from "./components/Editor/Editor.js";
import CV from "./components/Visualizer/CV.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [step, useStep] = useState(1);

  return (
    <>
      <Router>
        <Header step={step} />
        <DataProvider>
          <Route exact path="/" component={Editor} title="Editor" />
          <Route exact path="/cv" component={CV} />
        </DataProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
