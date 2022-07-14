import "./scss/style.scss";
import { DataProvider } from "./DataContext.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Editor from "./components/Editor/Editor.js";
import CV from "./components/Visualizer/CV.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  //const [step, setStep] = useState(1);
  const [basics, setBasics] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useState(() => {
    const saved = localStorage.getItem("inputs");
    const initialvalue = JSON.parse(saved);
    if(initialvalue) {
        setBasics(initialvalue)
    }
  },[])

  return (
    <>
      <Router>
        <Header step={step} />
        <DataProvider>
          <Route exact path="/" title="Editor">
            
            <Editor basicInfo={[basics, setBasics]}/>
          </Route>
          <Route exact path="/cv" component={CV} />
        </DataProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
