/** @format */

const Contact = ({ contact, onDelete }) => {
	const handleClick = () => {
		onDelete(contact.id);
	};
	return (
		<li>
			<p>{contact.name}</p>
			<p>{contact.number}</p>
			<button onClick={handleClick}>Delete</button>
		</li>
	);
};

export default Contact;
