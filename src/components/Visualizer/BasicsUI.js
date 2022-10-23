function Basics(props) {
  const { name, phone, email } = props.data;
  return (
    <div className="basic-info">
      <h2>{name || "Your Name"}</h2>
      <p className="number">Phone: {phone || "555-5555"}</p>
      <p className="email">Email: {email || "name@example.com"}</p>
    </div>
  );
}

export default Basics;
