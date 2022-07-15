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

const CVLink = () => (
  <Link to="/" style={{ textDecoration: "none" }}>
    <button className="green-button">Go back</button>
  </Link>
);

const CV = ({ data }) => {
  const [basics, institutions, experiences] = data;

  useTitle("Preview");

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
