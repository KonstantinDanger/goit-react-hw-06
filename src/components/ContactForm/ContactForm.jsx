import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

import css from "./ContactForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must contain at least 3 characters")
    .max(50, "The name is too long")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Number must contain at least 3 digits")
    .max(50, "The number is too long")
    .required("Phone number is required"),
});

const initialContactValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialContactValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" id={nameFieldId}></Field>
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.field}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field name="number" id={numberFieldId}></Field>
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
