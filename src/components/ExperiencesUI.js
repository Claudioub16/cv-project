function ExperiencesUI(props) {
	const {company, position, mainTasks, initialDate, finalDate} = props.data
	return(
		<div>
			<h4>Company:</h4>
			<p>{company}</p>
			<h4>Position:</h4>
			<p>{position}</p>
			<h4>Main Task:</h4>
			<p>{mainTasks}</p>
			<h4>Started:</h4>
			<p>{initialDate}</p>
			<h4>Finished:</h4>
			<p>{finalDate}</p>
		</div>
		)
}

export default ExperiencesUI