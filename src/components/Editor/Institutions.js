import React from "react";

const Institutions = (props) => {
  const { setState, data, disabled } = props;
  const { id, name, course, date } = data;

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
      key={id}
      className="institution-sections form-item"
      style={{
        backgroundColor: disabled && "#f6f6f6",
        pointerEvents: disabled && "none",
      }}
    >
      <div className="section-div-inline">
        <label htmlFor="">Institution</label>
        <input
          name="name"
          value={name}
          type="text"
          onChange={(event) => handleChange(event, id)}
          required
        />
      </div>
      <div className="section-div-inline">
        <label htmlFor="">Course</label>
        <input
          type="text"
          name="course"
          value={course}
          onChange={(event) => handleChange(event, id)}
          required
        />
      </div>
      <div className="section-div-inline">
        <label htmlFor="">Date</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(event) => handleChange(event, id)}
          required
        />
      </div>
      <span
        className="material-icons-outlined trash-can"
        onClick={() => handleRemoval(id)}
      >
        delete
      </span>
    </section>
  );
};

export default Institutions;
