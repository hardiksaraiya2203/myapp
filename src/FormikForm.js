import React from 'react'
import { Field, Formik, Form } from 'formik'

const FormikForm = () => {


    return (
        <Formik initialValues={
            {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                acceptTerms: ""
            }
        }
            onSubmit={(values) => {
                console.log(values);
            }}
            >
        <Form>
            <Field name="firstName" type="text" className="form-control"></Field>
            <Field name="lastName" type="text" className="form-control"></Field>
            <Field name="email" type="email" className="form-control"></Field>
            <Field name="password" type="password" className="form-control"></Field>
            <Field name="confirmPassword" type="password" className="form-control"></Field>
            <Field name="acceptTerms" type="checkbox"></Field>

            <input type='submit' value="Save"></input>
        </Form>
            </Formik>
   )
}

export default FormikForm
