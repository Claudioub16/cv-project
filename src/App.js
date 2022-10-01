import "./scss/style.scss";
import {HashRouter, Route } from "react-router-dom";
import Editor from "./components/Editor/Editor.js";
import CV from "./components/Visualizer/CV.js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import uniqid from "uniqid";

const getFromSessionStorage = (key, setState) => {
  const saved = sessionStorage.getItem(key);
  if (saved) {
    const parsed = JSON.parse(saved);
    setState(parsed);
  }
};

const App = () => {
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
    getFromSessionStorage("inputs", setBasics);
    getFromSessionStorage("institutions", setInstitutions);
    getFromSessionStorage("experiences", setExperiences);
  }, []);

  return (
    <HashRouter  >
      <Header />
      <Route exact path="/" title="Editor">
        <Editor
          basicInfo={[basics, setBasics]}
          education={[institutions, setInstitutions]}
          pastJobs={[experiences, setExperiences]}
        />
      </Route>
      <Route exact path="/cv">
        <CV basics={basics} institutions={institutions} experiences={experiences} />
      </Route>
      <Footer />
    </HashRouter>
  );
};

export default App;
