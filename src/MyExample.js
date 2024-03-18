import { Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import Form from 'react-bootstrap/Form';

const MyExample = () => {

    const validationSchema = () => {
        return Yup.object().shape({
            firstName: Yup.string().required('firstName is required'),
            lastName: Yup.string().required('lastName is required')
        });
    }
    return (
        <>

            <Formik
                onSubmit={console.log}
                initialValues={
                    {
                        firstName: '',
                        lastName: ''
                    }
                }
                validationSchema={validationSchema}

            >
                {
                    ({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors
                    }) => (<>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>firstName</Form.Label>
                                <Form.Control type="text"

                                    name='firstName'
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.firstName && errors.firstName}

                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>lastName</Form.Label>
                                <Form.Control type="text"

                                    name='lastName'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isInvalid={touched.lastName && errors.lastName}

                                />
                            </Form.Group>

                            {(touched.lastName && errors.lastName) &&
                                (<span>{errors.lastName}</span>)}

                            <input type="submit" value="save" />
                        </Form>

                    </>)
                }

            </Formik>
        </>
    )
}

export default MyExample
