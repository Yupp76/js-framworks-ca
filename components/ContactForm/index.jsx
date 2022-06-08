// import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { Field, Formik } from "formik";

const schema = yup.object().shape({
  firstName: yup.string().min(3).required(),
  lastName: yup.string().min(4).required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().min(10).required(),
});

const ContactForm = () => {
  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="firstName">
            <InputGroup className="mb-3">
              <InputGroup.Text id="name">Firstname</InputGroup.Text>
              <Form.Control
                placeholder="Firstname"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
                isInvalid={!!errors.firstName}
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Should be 3 characters minimum
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="lastName">
            <InputGroup className="mb-3">
              <InputGroup.Text id="name">Lastname</InputGroup.Text>
              <Form.Control
                placeholder="Lastname"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
                isInvalid={!!errors.lastName}
                type="text"
              />
              <Form.Control.Feedback type="invalid">
                Should be 4 characters minimum
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="email">
            <InputGroup className="mb-3">
              <InputGroup.Text id="name">Your Email</InputGroup.Text>
              <Form.Control
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
                type="email"
              />
              <Form.Control.Feedback type="invalid">
                Should be a valid email
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <div className="mb-4">
            <Field
              name="subject"
              as="select"
              value={values.subject}
              onChange={handleChange}
              isValid={touched.subject && !errors.subject}
              isInvalid={!!errors.subject}
              className="form-control"
            >
              <option value="">Subject</option>
              <option value="Message">Message</option>
              <option value="Notice">Notice</option>
            </Field>
            <p className="text-danger mt-2">
              {!!errors.subject && "This is a required field"}
            </p>
          </div>
          <Form.Group controlId="message">
            <InputGroup className="mb-3">
              <InputGroup.Text id="name">Message</InputGroup.Text>
              <Form.Control
                placeholder="Message"
                value={values.message}
                onChange={handleChange}
                isValid={touched.message && !errors.message}
                isInvalid={!!errors.message}
                as="textarea"
                rows={3}
              />
              <Form.Control.Feedback type="invalid">
                Should be 10 characters minimum
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
