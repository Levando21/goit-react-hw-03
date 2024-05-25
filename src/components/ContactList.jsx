/** @format */
import Contacts from "./Contacts";
const ContactList = ({ contacts, onDelete }) => {
	return (
		<div>
			<ul>
				{contacts.map((contact) => (
					<Contacts
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
