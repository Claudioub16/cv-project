import React, { useContext } from "react";
import BasicsUI from "./BasicsUI.js";
import InstitutionsUI from "./InstitutionsUI.js";
import ExperiencesUI from "./ExperiencesUI.js";
import { DataContext } from "../DataContext.js";
import { Link } from "react-router-dom";

function CV() {
  const { inputs, institutions, experiences } = useContext(DataContext);

  return (
    <div>
      <Link to="/cv-project" style={{ textDecoration: "none" }}>
        <button className="submit-form">Go back</button>
      </Link>

      <div className="CV">
        <section className="basic-info">
          <BasicsUI data={inputs} />
        </section>
        <section className="courses">
          <h3>Courses:</h3>
          {institutions.map((item) => (
            <InstitutionsUI data={item} key={item.id + "-ui"} />
          ))}
        </section>
        <section className="experiences">
          <h3>Experiences:</h3>
          {experiences.map((item) => (
            <ExperiencesUI data={item} key={item.id + "-ui"} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default CV;
