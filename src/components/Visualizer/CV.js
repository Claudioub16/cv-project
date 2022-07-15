import React, { useContext, useEffect } from "react";
import BasicsUI from "./BasicsUI.js";
import InstitutionsUI from "./InstitutionsUI.js";
import ExperiencesUI from "./ExperiencesUI.js";
import { DataContext } from "../../DataContext.js";
import { Link } from "react-router-dom";

function useTitle(title, ...deps) {
  useEffect(() => {
    document.title = title;
  }, [...deps]);
}

const CVLink = () => (
  <Link to="/" style={{ textDecoration: "none" }}>
    <button className="green-button">Go back</button>
  </Link>
);

const CV = ({ data }) => {
  const { institutions, experiences } = useContext(DataContext);
  const [basics] = data;

  useTitle("CV");

  return (
    <div>
      <CVLink />
      <div className="CV">
        <section className="basic-info">
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
    </div>
  );
};

export default CV;
