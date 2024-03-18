import {useFormik} from 'formik'
import React from 'react'

const BasicForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (val) => {
            console.log(val);
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default BasicForm
