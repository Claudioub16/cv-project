import React from "react";

function Experiences({ setState, data, disabled }) {
  const { company, position, mainTasks, initialDate, finalDate, id } = data;

  const handleChange = (event, id) => {
    const { name: propertyName, value } = event.target;

    setState((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          item[propertyName] = value;
        }
        return item;
      });
    });
  };

  const handleRemoval = (id) => {
    setState((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <section
      className="form-item"
      style={{
        backgroundColor: disabled && "#f6f6f6",
        pointerEvents: disabled && "none",
      }}
    >
      <div className="section-div-inline">
        <label htmlFor="">Company Name</label>
        <input
          name="company"
          type="text"
          value={company}
          onChange={(event) => handleChange(event, id)}
          required
        />
      </div>
      <div className="section-div-inline">
        <label htmlFor="">Position Title</label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={(event) => handleChange(event, id)}
          required
        />
      </div>
      <div className="section-div-inline textarea-div">
        <label htmlFor="">Main tasks</label>
        <textarea
          name="mainTasks"
          value={mainTasks}
          className="text-area"
          onChange={(event) => handleChange(event, id)}
        />
      </div>
      <div className="worked-days">
        <div className="section-div-inline">
          <label htmlFor="">Started working</label>
          <input
            type="month"
            name="initialDate"
            value={initialDate}
            onChange={(event) => handleChange(event, id)}
            required
          />
        </div>
        <div className="section-div-inline">
          <label htmlFor="">Worked until</label>
          <input
            type="month"
            name="finalDate"
            value={finalDate}
            onChange={(event) => handleChange(event, id)}
            required
          />
        </div>
      </div>
      <span
        className="material-icons-outlined trash-can"
        style={{ pointerEvents: disabled && "none" }}
        onClick={(e) => handleRemoval(id)}
      >
        delete
      </span>
    </section>
  );
}

export default Experiences;
