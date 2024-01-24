import React from 'react';
import { Button, Form, Row, Container, Col } from 'react-bootstrap';
import "./style.css";
import * as formik from 'formik';
import * as yup from 'yup';



function SignUp() {
    const { Formik } = formik;

    debugger;

    const schema = yup.object().shape({
        firstName: yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: yup.string().email('Invalid email').required('Required'),
        password: yup.string()
            .required("Password is required")
            .min(8, "Password is too short - should be 8 chars minimum"),
    });

    return (

        <Container className='hero_background align-items-top' fluid>
            <Container className='gridhero'>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Formik
                            validationSchema={schema}
                            initialValues={{
                                firstName: 'Glenda',
                                lastName: 'Cordova',
                                email: '',
                                password: '',
                            }}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form noValidate onSubmit={handleSubmit} >
                                    <Container className="w-50"  >
                                        <Row className="mb-4 shadow-lg p-5 rounded ">
                                            <Col>
                                                <Form.Group as={Col} controlId="formFirstName">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="firstName"
                                                        value={values.firstName}
                                                        onChange={handleChange}
                                                        isValid={touched.firstName && !errors.firstName}
                                                        placeholder="First Name"
                                                        className="position-relative" />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formEmail">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control
                                                        name="email"
                                                        placeholder="Email"
                                                        type="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        isValid={touched.email && !errors.email}
                                                        className="position-relative" />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>

                                            <Col>
                                                <Form.Group as={Col} controlId="formLastName">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control
                                                        name="lastName"
                                                        value={values.lastName}
                                                        onChange={handleChange}
                                                        isValid={touched.lastName && !errors.lastName}
                                                        placeholder="Last Name"
                                                        type="text"
                                                        className="position-relative" />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formPassword">
                                                    <Form.Label></Form.Label>
                                                    <Form.Control
                                                        name="password"
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        isValid={touched.password && !errors.password}
                                                        type="password"
                                                        placeholder="Password"
                                                        className="position-relative" />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Row>
                                                <Col>
                                                    <Button style={{ backgroundColor: "#fcd5ce", borderColor: "#fcd5ce" }} className='text-dark' mt-4 variant="primary" type="submit"> Register</Button>
                                                </Col>
                                            </Row>
                                        </Row>
                                    </Container>

                                </Form>)}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
};


export default SignUp;