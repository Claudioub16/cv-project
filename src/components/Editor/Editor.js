import React, { useContext, useEffect } from "react";
import Basics from "./Basics.js";
import Institutions from "./Institutions.js";
import Experiences from "./Experiences.js";
import { DataContext } from "../../DataContext.js";
import { Link, useHistory } from "react-router-dom";

function useTitle(title, ...deps) {
  useEffect(() => {
    document.title = title;
  }, [...deps]);
}

const Editor = ({basicInfo}) => {
  const [basics, setBasics] = basicInfo;
  const {
    formSubmit,
    
    handleChange,
    disabled,
    saveArea,
    institutions,
    handleRemoval,
    experiences,
    addNewInst,
    addNewExperience,
  } = useContext(DataContext);

  const history = useHistory();

  useTitle("Create your CV");

  return (
    <form
      className="cv-form"
      onSubmit={(e) => {
        history.push("/cv");
        formSubmit(e);
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
      {/*
      <section className="form-section institutions-form">
        {institutions.map((item) => (
          <Institutions
            data={item}
            key={item.id}
            handleRemoval={handleRemoval}
            disabled={disabled["institutionsDisabled"]}
            handleChange={handleChange}
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
            handleRemoval={handleRemoval}
            disabled={disabled["experincesDisabled"]}
            handleChange={handleChange}
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
      */}
      <button className="green-button">Submit</button>
    </form>
  );
};

export default Editor;
