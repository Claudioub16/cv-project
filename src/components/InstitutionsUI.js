function InstitutionsUI(props) {
	const {name, course, date} = props.data;
	return(
		<div className="section-div">
			<div>
			  <h4>Institution:</h4>
			  <p>{name}</p>
			</div>
			<div>
  			<h4>Course:</h4>
	  		<p>{course}</p>
			</div>
			<div>
	  		<h4>Year:</h4>
  			<p>{date}</p>
			</div>
		</div>

		)
}

export default InstitutionsUI
