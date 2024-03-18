import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

const EMPWITHYUP = () => {
    const initialValues = {
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
        gender: '',
        country: ''
    };
    const handleSubmit = (data) => {


        console.log(JSON.stringify(data));
        // console.log((data));
    }
    const validationSchema = () => {
        return Yup.object().shape({
            fullname: Yup.string().required('Fullname is required'),
            username: Yup.string()
                .required('Username is required')
                .min(6, 'Username must be at least 6 characters')
                .max(20, 'Username must not exceed 20 characters'),
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),

            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters')
                .max(40, 'Password must not exceed 40 characters'),
            confirmPassword: Yup.string()
                .required('Confirm Password is required')
                .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
            acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
            country: Yup.string('please select country'),
            gender: Yup.string('please select gender')
        });
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}

            >

                <Form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <Field name="fullname" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="fullname"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username"> Username </label>
                        <Field name="username" type="text" className="form-control" />
                        <ErrorMessage
                            name="username"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <Field name="email" type="text" className="form-control" />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
                        <Field
                            name="password"
                            type="password"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword"> Confirm Password </label>
                        <Field
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                        />
                        <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div className="form-group form-check">
                        <Field
                            name="acceptTerms"
                            type="checkbox"
                            className="form-check-input"
                        />
                        <label htmlFor="acceptTerms" className="form-check-label">
                            I have read and agree to the Terms
                        </label>
                        <ErrorMessage
                            name="acceptTerms"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <div role='group' aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio" name="gender" value="Male">Male</Field>
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="Female">Female</Field>
                        </label>
                        <ErrorMessage
                            name="gender"
                            component="div"
                            className="text-danger"
                        />
                    </div>

                    <Field name="country" as='select'>
                        <option value="" disabled>---select---</option>
                        <option value="in">India</option>
                        <option value="us">USA</option>
                        <option value="cn">Canada</option></Field>
                    <ErrorMessage
                        name="country"
                        component="div"
                        className="text-danger" />


                    <div className="form-group">
                        <button type="submit"
                            className="btn btn-primary">
                            Register
                        </button>
                        <button
                            type="button"

                            className="btn btn-warning float-right"
                        >
                            Reset
                        </button>
                    </div>
                </Form>


            </Formik>

        </div>
    )
}

export default EMPWITHYUP
