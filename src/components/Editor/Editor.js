import React, { useContext, useEffect, useState } from "react";
import Basics from "./Basics.js";
import Institutions from "./Institutions.js";
import Experiences from "./Experiences.js";
import { useHistory } from "react-router-dom";
import uniqid from "uniqid";

function useTitle(title, ...deps) {
  useEffect(() => {
    document.title = title;
  }, [...deps]);
}

const defaulteditingstatus = {
  basicsdisabled: false,
  institutionsdisabled: false,
  experincesdisabled: false,
};

const Editor = ({ basicInfo, education, pastJobs }) => {
  const [basics, setBasics] = basicInfo;
  const [institutions, setInstitutions] = education;
  const [experiences, setExperiences] = pastJobs;

  const [disabled, setDisabled] = useState(() => {
    const saved = localStorage.getItem("defaulteditingstatus");
    const initialvalue = JSON.parse(saved);
    return initialvalue || defaulteditingstatus;
  });

  const addNewInst = () => {
    setInstitutions([
      ...institutions,
      {
        name: "",
        course: "",
        date: "",
        id: uniqid(),
      },
    ]);
  };

  const addNewExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        position: "",
        mainTasks: " ",
        initialDate: "2018-05",
        finalDate: "2020-05",
        id: uniqid(),
      },
    ]);
  };

  const saveArea = (event) => {
    const { name: propertyName } = event.target;
    setDisabled((prevState) => {
      const newBool = !prevState[propertyName];
      return {
        ...prevState,
        [propertyName]: newBool,
      };
    });
    localStorage.setItem("experiences", JSON.stringify(experiences));
    localStorage.setItem("institutions", JSON.stringify(institutions));
    localStorage.setItem("inputs", JSON.stringify(basics));
  };

  useEffect(() => {
    localStorage.setItem("defaultEditingStatus", JSON.stringify(disabled));
  }, [disabled]);

  const history = useHistory();

  useTitle("Create your CV");

  return (
    <form
      className="cv-form"
      onSubmit={(e) => {
        history.push("/cv");
        e.preventDefault();
      }}
    >
      <section className="form-section basics-form">
        <h3 className="form-section-modal">Basics</h3>
        <Basics
          state={basics}
          setState={setBasics}
          disabled={disabled["basicsDisabled"]}
        />
        <button type="button" name="basicsDisabled" onClick={saveArea}>
          {disabled["basicsDisabled"] ? "Edit" : "Save"}
        </button>
      </section>

      <section className="form-section institutions-form">
        {institutions.map((item) => (
          <Institutions
            data={item}
            key={item.id}
            disabled={disabled["institutionsDisabled"]}
            setState={setInstitutions}
          />
        ))}
        <div className="buttons-div">
          <button type="button" onClick={addNewInst}>
            Add New
          </button>
          <button type="button" name="institutionsDisabled" onClick={saveArea}>
            {disabled["institutionsDisabled"] ? "Edit" : "Save"}
          </button>
        </div>
      </section>

      <section className="form-section experiences-form">
        {experiences.map((item) => (
          <Experiences
            data={item}
            key={item.id}
            disabled={disabled["experincesDisabled"]}
            setState={setExperiences}
          />
        ))}
        <div className="buttons-div">
          <button type="button" onClick={addNewExperience}>
            Add New
          </button>
          <button type="button" name="experincesDisabled" onClick={saveArea}>
            {disabled["experincesDisabled"] ? "Edit" : "Save"}
          </button>
        </div>
      </section>

      <button className="green-button">Submit</button>
    </form>
  );
};

export default Editor;
