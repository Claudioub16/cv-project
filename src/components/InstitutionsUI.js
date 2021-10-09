function InstitutionsUI(props) {
	const {name, course, date} = props.data;
	return(
		<div>
			<h4>Institution:</h4>
			<p>{name}</p>
			<h4>Course:</h4>
			<p>{course}</p>
			<h4>Year:</h4>
			<p>{date}</p>
		</div>

		)
}

export default InstitutionsUI