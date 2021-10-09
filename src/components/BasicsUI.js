
function Basics(props) {
	const {name, phone, email} = props.data
	return (
		<div>
			<h2>{name}</h2>
        	<p>{phone}</p><p>{email}</p>
		</div>
		)
}


export default Basics
