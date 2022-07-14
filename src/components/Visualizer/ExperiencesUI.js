function ExperiencesUI(props) {
	const {company, position, mainTasks, initialDate, finalDate} = props.data
	return(
		<div className="section-div">
			<div className="company">
        <h4>Company:</h4>
			  <p>{company}</p>
			</div>
			<div className="position">
				<h4>Position:</h4>
  			<p>{position}</p>
			</div>
			<div className="main-tasks">
				<h4>Main Task:</h4>
			  <p>{mainTasks}</p>
			</div>
			<div>
			  <div className="dates">
	   		  <h4>Started:</h4>
		  	  <p>{initialDate}</p>
			  </div>
			  <div className="dates">
	  		  <h4>Finished:</h4>
  			  <p>{finalDate}</p>
			  </div>
			</div>
		</div>
		)
}

export default ExperiencesUI
