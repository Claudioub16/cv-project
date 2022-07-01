import React from 'react';

function Institutions(props) {
	const {handleChange, data, handleRemoval, disabled} = props;
	const {id, name, course, date} = data;

	return(
		<section 	key={id} 
					className="institution-sections form-item" 
					style={{backgroundColor: disabled && '#f6f6f6',
							pointerEvents: disabled && 'none'  }}>
			<div className="section-div-inline">
				<label htmlFor="">Institution</label>
	        	<input 	name="institution-name" 
	        		value={name}
	        		type="text" 
	        		onChange={(event) => handleChange(event, id)} 
	        		required/>
			</div>
	        <div className="section-div-inline">
	        	<label 	htmlFor="">Course</label>
	        <input 	type="text" 
	        		name="institution-course" 
	        		value={course}
	        		onChange={(event) => handleChange(event, id)} 
	        		required/>
	        </div>	        
	        <div className="section-div-inline">
	        	<label 	htmlFor="">Date</label>
	        	<input 	type="date"  
	        			name="institution-date" 
	        			value={date}
	        			onChange={(event) => handleChange(event, id)}
	        			required/>
	        </div>
	        <span 	className="material-icons-outlined trash-can" 
	        		onClick={() => handleRemoval('Institutions', id)}>delete</span>
      	</section>
		)
}

export default Institutions
