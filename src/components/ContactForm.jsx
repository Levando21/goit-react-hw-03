/** @format */

import { Field, ErrorMessage } from "formik";

const ContactForm = ({ id }) => {
	return (
		<div>
			<label htmlFor={`${id}-name`}>Name</label>
			<Field
				type="text"
				name="name"
				id={`${id}-name`}
			/>
			<ErrorMessage
				name="name"
				component="div"
				className="error-message"
			/>

			<label htmlFor={`${id}-phone`}>Phone</label>
			<Field
				type="tel"
				name="number"
				id={`${id}-phone`}
			/>
			<ErrorMessage
				name="number"
				component="div"
				className="error-message"
			/>

			<button type="submit">Add contact</button>
		</div>
	);
};

export default ContactForm;
