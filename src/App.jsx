/** @format */

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

import "./App.css";
import SearchBox from "./components/SearchBox";

const initialContacts = [
	{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
	{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
	{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
	{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
	const [contacts, setContacts] = useState(initialContacts);
	const newId = useId();

	const handleDelete = (id) => {
		const updatedContacts = contacts.filter((contact) => contact.id !== id);
		setContacts(updatedContacts);
	};

	const handleSubmit = (values, { resetForm }) => {
		addContact({
			id: newId + "-" + Date.now(),
			name: values.name,
			number: values.number,
		});
		resetForm();
	};

	const handleChange = (searchContact, evt) => {
		const query = evt.target.value;
		searchContact(query);
	};

	const searchContact = (query) => {
		const filteredContacts = initialContacts.filter(
			(contact) =>
				contact.name.toLowerCase().includes(query.toLowerCase()) ||
				contact.number.toLowerCase().includes(query.toLowerCase())
		);
		setContacts(filteredContacts);
	};

	const addContact = (newContact) => {
		setContacts((prevContacts) => [...prevContacts, newContact]);
		console.log("Contact added:", newContact);
	};

	const contactSchema = Yup.object().shape({
		name: Yup.string()
			.required("Name is required")
			.min(3, "Name must be at least 3 characters")
			.max(50, "Name must be at most 50 characters"),
		number: Yup.string()
			.required("Phone number is required")
			.min(10, "Phone number must be at least 10 characters")
			.max(50, "Phone number must be at most 50 characters"),
	});

	return (
		<>
			<h1>Phonebook</h1>
			<Formik
				initialValues={{ name: "", number: "" }}
				onSubmit={handleSubmit}
				validationSchema={contactSchema}>
				<Form>
					<ContactForm id={newId} />
				</Form>
			</Formik>
			<SearchBox onChange={(query) => handleChange(searchContact, query)} />
			<ContactList
				contacts={contacts}
				onDelete={handleDelete}
			/>
		</>
	);
}
export default App;
