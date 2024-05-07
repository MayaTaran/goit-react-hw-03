import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required('Name is required'),
  number: Yup.string().required('Number is required'),
});

export const ContactForm = ({ onSubmit }) => { 
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
              const id = nanoid();
  
        const newContact = {
          id,
          name: values.name,
          number: values.number,
        };

        onSubmit(newContact); 
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.inputField}>
            <label htmlFor={nameId} className={css.label}>Name</label>
            <Field type="text" id={nameId} name="name" className={css.input} />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </div>

          <div className={css.inputField}>
            <label htmlFor={numberId} className={css.label}>Number</label>
            <Field type="text" id={numberId} name="number"  className={css.input}/>
            {errors.number && touched.number ? <div>{errors.number}</div> : null}
          </div>

          <button type="submit" className={css.button}>Add Contact</button> 
        </Form>
      )}
    </Formik>
  );
};