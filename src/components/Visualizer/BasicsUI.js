
function Basics(props) {
	const {name, phone, email} = props.data
	return (
		<div>
			<h2>{name}</h2>
      <p className="number">{phone}</p>
			<p className="email">{email}</p>
		</div>
		)
}


export default Basics
