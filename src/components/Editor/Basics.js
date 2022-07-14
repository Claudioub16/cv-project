const Basics = ({ state, setState, disabled }) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <section
      className="form-item basics"
      style={{
        backgroundColor: disabled && "#f6f6f6",
        pointerEvents: disabled && "none",
      }}
    >
      <div className="section-div-inline">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={state.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="section-div-inline">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          value={state.email}
          id="email"
          onChange={handleChange}
          required
        />
      </div>
      <div className="section-div-inline">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          required
        />
      </div>
    </section>
  );
};

export default Basics;
