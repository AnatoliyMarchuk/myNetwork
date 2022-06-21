import React from 'react';
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import TextError from '../News/YouTubeFormFomik/TextError';
import s from './LoginForm.module.css';
const initialValues = {
	email: '',
	password: '',
	rememberMe: '',
};

const validationSchema = Yup.object().shape({
	// name: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().min(5, 'Min 5 symbol!!!').required('Required'),
});

export default function LoginForm(props) {
	const onSubmit = (values, { setSubmitting, setStatus, resetForm }) => {
		console.log('Form data:', values);
		props.userLogin(values.email, values.password, values.rememberMe, setStatus);
		setSubmitting(false);
		resetForm();
	};
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ status, values, ...formik }) => {
				console.log('Formik props:', formik);
				return (
					<Form>
						<div className={s.login_form}>
							<div className={s.field}>
								<span className={s.error_server}>{status}</span>
								<label htmlFor='email'>Email address</label>
								<Field type='email' id='email' name='email' className='form-control' />
								<ErrorMessage name='email' component={TextError} />
							</div>
							<div className={s.field}>
								<label htmlFor='password'>password</label>
								<Field type='password' id='password' name='password' className='form-control' />
								<ErrorMessage name='password' component={TextError} />
							</div>
							<Field type='checkbox' name='rememberMe' />
							<button type='submit' className={`${s.btn} btn`}>
								Submit
							</button>
							<div>{values.general ? <span>{values.general}</span> : null}</div>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
}

// <div className={s.field}>
// <label htmlFor='name'>Name</label>
// <Field type='text' id='name' name='name' className='form-control' />
// <ErrorMessage name='name' component={TextError} />
// </div>
