import React from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Form, Row, Container,Col} from 'react-bootstrap';
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
        email:  yup.string().email('Invalid email').required('Required'),
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
                    firstName: 'Mark',
                    lastName: 'Otto',
                    email:'',
                    password: '',
                }}
                    onSubmit={(values) => {
                    console.log(values);
                  }}
                >        
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form noValidate onSubmit={handleSubmit} >
                                    <Row className="mb-3">
                                        <Col>
                                        <Form.Group as={Col} md="12"  controlId="formFirstName">
                                         <Form.Label></Form.Label>
                                            <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            isValid={touched.firstName && !errors.firstName}
                                            placeholder="First Name"
                                            className="position-relative"/>
                                            
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group as={Col} md="12" controlId="formEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isValid={touched.email && !errors.email}
                                            className="position-relative"/>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>  
                                        </Col>

                                        <Col>            
                                            <Form.Group as={Col} mb="12" controlId="formLastName">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            isValid={touched.lastName && !errors.lastName}
                                            placeholder="Last Name"
                                            type="text"
                                            className="position-relative"/>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                            </Form.Group>
                                            <Form.Group as={Col} mb="12" controlId="formPassword">
                                            <Form.Label></Form.Label>
                                            <Form.Control 
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            isValid={touched.password && !errors.password}
                                            type="password" 
                                            placeholder="Password"
                                            className="position-relative"/>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>  
                                        </Col>
                                        <Col>
                                        </Col>               
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Button as={Col} variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
                                        </Col> 
                                    </Row>
                                </Form>)}
                        </Formik>
                    </Col>
                </Row>
          </Container>
        </Container>
    )};


export default SignUp;