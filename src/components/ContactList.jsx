/** @format */
import Contact from "./Contact";
const ContactList = ({ contacts, onDelete }) => {
	return (
		<div>
			<ul>
				{contacts.map((contact) => (
					<Contact
						key={contact.id}
						contact={contact}
						onDelete={onDelete}
					/>
				))}
			</ul>
		</div>
	);
};

export default ContactList;
