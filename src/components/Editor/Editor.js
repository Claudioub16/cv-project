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

const Editor = (props) => {
  const {
    formSubmit,
    inputs,
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

  const goToCV = () => history.push("/cv");

  return (
    <form
      className="cv-form"
      onSubmit={(e) => {
        goToCV();
        formSubmit(e);
      }}
    >
      <section className="form-section basics-form">
        <Basics
          data={inputs}
          handleChange={handleChange}
          disabled={disabled["basicsDisabled"]}
        />
        <button type="button" name="basicsDisabled" onClick={saveArea}>
          {disabled["basicsDisabled"] ? "Edit" : "Save"}
        </button>
        <div className="form-section-modal"></div>
      </section>
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
      <button className="green-button">Submit</button>
    </form>
  );
};

export default Editor;
