import React from 'react';

function Experiences(props) {
	const {handleChange, data, handleRemoval, disabled} = props;
	const {company, position, mainTasks, initialDate, finalDate, id} = data
	
	return(
		<section className="form-item" 
				 style={{backgroundColor: disabled && '#f6f6f6', 
				 		 pointerEvents: disabled && 'none'  }}>
			<div className="section-div-inline">
				<label htmlFor="">Company Name</label>
        		<input 	name="experience-company" 
        		type="text" 
        		value={company}
        		onChange={(event) => handleChange(event, id)} 
        		required/>
			</div>
        	<div className="section-div-inline">
        		<label 	htmlFor="">Position Title</label>
	        	<input 	type="text" 
	        		name="experience-position" 
	        		value={position}
	        		onChange={(event) => handleChange(event, id)} 
	        		required/>
        	</div>
	        <div className="section-div-inline textarea-div">
	        	<label 	htmlFor="">Main tasks</label>
	        	<textarea 	name="experience-mainTasks" 
	        				value={mainTasks} 
	        				className="text-area"
	        				onChange={(event) => handleChange(event, id)}/>
	        </div>
	        <div className="worked-days">
	        	<div className="section-div-inline">
	        	<label 	htmlFor="">Started working</label>
	        	<input 	type="month"  
	        			name="experience-initialDate" 
	        			value={initialDate}
	        			onChange={(event) => handleChange(event, id)}
	        			required/>
		        </div>
		        <div className="section-div-inline">
		        	<label 	htmlFor="">Worked until</label>
		        	<input 	type="month"  
		        			name="experience-finalDate" 
		        			value={finalDate}
		        			onChange={(event) => handleChange(event, id)}
		        			required/>
	        	</div>
	        </div>
	        <span 	className="material-icons-outlined trash-can" 
	        		style={{pointerEvents: disabled && 'none' }}
	        		onClick={(e) => handleRemoval('experiences', id)}>delete</span>
      	</section>
      	)
}


export default Experiences
