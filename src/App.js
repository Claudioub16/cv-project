import "./scss/style.scss";
import { DataProvider } from "./DataContext.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Editor from "./components/Editor/Editor.js";
import CV from "./components/Visualizer/CV.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import uniqid from "uniqid";

const getFromLocalStorage = (key, setState) => {
  const saved = localStorage.getItem(key);
  if (saved) {
    const parsed = JSON.parse(saved);
    setState(parsed);
  }
};

const App = () => {
  //const [step, setStep] = useState(1);
  const [basics, setBasics] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [institutions, setInstitutions] = useState([
    {
      name: "",
      course: "",
      date: "2018-05-05",
      id: uniqid(),
    },
  ]);
  const [experiences, setExperiences] = useState([
    {
      company: "",
      position: "",
      maintasks: " ",
      initialdate: "2018-05",
      finaldate: "2020-05",
      id: uniqid(),
    },
  ]);

  useState(() => {
    getFromLocalStorage("inputs", setBasics);
    getFromLocalStorage("institutions", setInstitutions);
    getFromLocalStorage("experiences", setExperiences);
  }, []);

  return (
    <Router>
      <Header />
      <DataProvider>
        <Route exact path="/" title="Editor">
          <Editor
            basicInfo={[basics, setBasics]}
            education={[institutions, setInstitutions]}
            pastJobs={[experiences, setExperiences]}
          />
        </Route>
        <Route exact path="/cv">
          <CV data={[basics]} />
        </Route>
      </DataProvider>
      <Footer />
    </Router>
  );
};

export default App;
