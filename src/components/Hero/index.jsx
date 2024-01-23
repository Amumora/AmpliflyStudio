import React from 'react';
import {Button, Form, Row, Container,Col} from 'react-bootstrap';
import "./style.css";
import * as formik from 'formik';
import * as yup from 'yup';



function SignUp() {
    const { Formik } = formik;
  
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email:  yup.string().email('Invalid email').required('Required'),
        password: yup.string().required(),
        //terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
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
                        initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        }}
                        validationschema={schema}
                        onSubmit={values => {
                        initialvalues={
                            firstName: '',
                            lastName: '',
                            email: '',    
                          }
                          console.log(values);
                          }}>
                        
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form noValidate onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Col>
                                        <Form.Group as={Col} md="12" controlId="formFirstName">
                                         <Form.Label></Form.Label>
                                            <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={values.firstName}
                                            onChange={handleChange}
                                            isValid={touched.firstName && !errors.firstName}
                                            placeholder="First Name"/>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>

                                            <Form.Group as={Col} md="12" controlId="formEmail">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            isValid={touched.email && !errors.email}
                                            placeholder="Email"
                                            type="email"/>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>  
                                        </Col>

                                        <Col>            
                                            <Form.Group as={Col} mb="4" controlId="formLastName">
                                            <Form.Label></Form.Label>
                                            <Form.Control
                                            name="lastName"
                                            value={values.lastName}
                                            onChange={handleChange}
                                            isValid={touched.lastName && !errors.lastName}
                                            placeholder="Last Name"
                                            type="text"/>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                                            </Form.Group>
                                            <Form.Group as={Col} mb="6" controlId="formPassword">
                                            <Form.Label></Form.Label>
                                            <Form.Control 
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            isValid={touched.password && !errors.password}
                                            type="password" 
                                            placeholder="Password"/>
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            </Form.Group>  
                                        </Col>
                                        <Col>
                                        </Col>               
                                    </Row>
                                    <Row>
                                        <Col>
                                        <Button as={Col} variant="primary" type="submit">Register</Button>
                                        </Col> 
                                    </Row>
                                </Form>)}
                        </Formik>
                    </Col>
                </Row>
          </Container>
        </Container>
    )}
export default SignUp;