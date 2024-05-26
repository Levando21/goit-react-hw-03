/** @format */

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = ({ id, handleSubmit }) => {
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
		<Formik
			initialValues={{ name: "", number: "" }}
			onSubmit={handleSubmit}
			validationSchema={contactSchema}>
			<Form>
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
				</div>
				<div>
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
				</div>
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
