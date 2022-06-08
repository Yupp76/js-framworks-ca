import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { launchPostRequest } from "../../lib/strapiAuth";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = () => {
  const [isError, setIsError] = useState(false);

  const formSubmition = async (values, { setSubmitting }) => {
    const isLoggedIn = await launchPostRequest(values.email, values.password);

    if (isLoggedIn === false) setIsError(true);

    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={formSubmition}
    >
      {({ handleSubmit, handleChange, values, touched, errors, resetForm }) => (
        <>
          {isError && (
            <Alert
              variant="danger"
              onClose={() => {
                setIsError(false);
                resetForm();
              }}
              dismissible
            >
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>Make sure you login details are exact and try again.</p>
            </Alert>
          )}
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <InputGroup className="mb-3">
                <InputGroup.Text id="email">Email</InputGroup.Text>
                <Form.Control
                  placeholder="email"
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
            <Form.Group controlId="password">
              <InputGroup className="mb-3">
                <InputGroup.Text id="password">Password</InputGroup.Text>
                <Form.Control
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                  type="password"
                />
                <Form.Control.Feedback type="invalid">
                  This is a required field
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Button className="w-100" variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
