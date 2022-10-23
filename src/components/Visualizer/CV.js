import React, { useEffect } from "react";
import BasicsUI from "./BasicsUI.js";
import InstitutionsUI from "./InstitutionsUI.js";
import ExperiencesUI from "./ExperiencesUI.js";
import { Link } from "react-router-dom";

function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

const CV = ({ basics, institutions, experiences }) => {
  useTitle("CV");

  return (
    <div className="CV">
      <section className="basics">
        <BasicsUI data={basics} />
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
  );
};

export default CV;
