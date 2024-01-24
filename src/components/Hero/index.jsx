import React from 'react';
import { Button, Form, Row, Container, Col, Image} from 'react-bootstrap';
import "./style.css";
import * as formik from 'formik';
import * as yup from 'yup';
import nobkg from '../../assets/images/logo_nobkg.png';



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

        <Container className='hero_background d-flex justify-content-center align-items-center' fluid>
            <Row className='d-flex justify-content-center align-items-center flex-wrap w-100 p-5'>
                <Col className='d-flex justify-content-center align-items-center p-5'>
                    <Image src={nobkg} fluid/></Col>
                <Col className=' d-flex justify-content-center align-items-center ' >
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
                            <Form noValidate onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center mb-4 shadow-lg p-5">
                                <Col>
                                    <Form.Group controlId="formFirstName">
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
                                    <Form.Group controlId="formLastName">
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
                                    <Form.Group controlId="formEmail">
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

                                    <Form.Group controlId="formPassword">
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

                                    <Button style={{ backgroundColor: "#fcd5ce", borderColor: "#fcd5ce" }} className='text-dark mt-4' variant="primary" type="submit"> Register</Button>
                                </Col>
                            </Form>)}
                    </Formik>
                </Col>
            </Row>

        </Container>
    )
};


export default SignUp;