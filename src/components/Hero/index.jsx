import React from 'react';
import { useFormik } from 'formik';
import { Button, Form, Row, Container, Col, Image } from 'react-bootstrap';
import * as yup from 'yup';
import nobkg from '../../assets/images/logo_nobkg.png';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import * as bootstrap from 'bootstrap';
// Import Bootstrap CSS


function SignUp() {
  const schema = yup.object().shape({
    firstName: yup.string().min(4, 'Too Short! Min 4').max(15, 'Too Long! Max 15').required('Required'),
    lastName: yup.string().min(4, 'Too Short! Min 4').max(15, 'Too Long! Max 15').required('Required'),
    email: yup.string().email('Invalid email ex.john@example.com').required('Required'),
    password: yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum'),
  });

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      const result = setSessionData(values);
      if (result === 'success') {
        resetForm();
      }
    },
  });

  function setSessionData(values) {
    const data = JSON.stringify(values);
    const uniqueUser = 'userData_' + values.email;
    
    if (localStorage.getItem(uniqueUser) !== null) {
      console.log('Email already exists in local storage:');
      return 'exists';
    } else {
      localStorage.setItem(uniqueUser, data);
      console.log('Data stored in local storage:', values);
      return 'success';
    }
  }

  return (
    <Container className='hero_background d-flex justify-content-center align-items-center' fluid>
      <Row className='d-flex justify-content-center align-items-center flex-wrap w-100 p-5'>
        <Col className='d-flex justify-content-center align-items-center p-5'>
          <Image src={nobkg} fluid />
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          <Form noValidate onSubmit={formik.handleSubmit} className="d-flex flex-column justify-content-center align-items-center mb-4 shadow-lg p-5">
            <Col>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  isValid={formik.touched.firstName && !formik.errors.firstName}
                  placeholder="Enter your first name"
                />
                <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  isValid={formik.touched.lastName && !formik.errors.lastName}
                  placeholder="Enter your last name"
                />
                <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  isValid={formik.touched.email && !formik.errors.email}
                  placeholder="Enter your email address"
                />
                <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  isValid={formik.touched.password && !formik.errors.password}
                  placeholder="Enter your password"
                />
                <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
              </Form.Group>
              <Button
                style={{ backgroundColor: "#fcd5ce", borderColor: "#fcd5ce" }}
                className='text-dark mt-4'
                variant="primary"
                type="submit"
              >
                Register
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
