function InstitutionsUI(props) {
  const { name, course, date } = props.data;
  return (
    <div className="section-div">
      <h4>{course || "course name"}</h4>
      <p>{name || "instituition name"}</p>
      <p>{date || "00/00/0000"}</p>
    </div>
  );
}

export default InstitutionsUI;
