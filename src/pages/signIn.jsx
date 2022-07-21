import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { Formik, Field, Form } from "formik"
import * as yup from "yup"
import backend from "../services/backend"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setCredentials } from "../redux/reducers/auth"

const initialValues = {
  email: "",
  password: "",
  remember: false,
}

const signSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required."),
  password: yup.string().required("Password is required"),
})

export default function signIn() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  async function handleSubmit(values, { setSubmitting }) {
    try {
      setSubmitting(false)
      const res = await backend.auth.login(values)
      dispatch(setCredentials(res.data.body.token))
      navigate("/user", { replace: true })
    } catch (error) {
      setSubmitting(false)
      setError(true)
    }
  }

  return (
    <main className="signin">
      <section className="signin-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>

        {error && <p className="error">Your username or your password is not valid</p>}

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signSchema}>
          {({ errors, touched, isSubmitting, isValid, dirty }) => (
            <Form>
              <div className="input-wrapper">
                <label htmlFor="email">Username</label>
                <Field id="email" name="email" type="email" />
                {touched.email && errors.email && <div className="error">{errors.email}</div>}
              </div>

              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <Field id="password" name="password" type="password" />
                {touched.password && errors.password && <div className="error">{errors.password}</div>}
              </div>

              <div className="input-remember">
                <label>
                  <Field type="checkbox" name="remember" />
                  Remember me
                </label>
              </div>

              <button type="submit" className="button sign-in-button" disabled={!(dirty && !isSubmitting && isValid)}>
                {isSubmitting ? "loading..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  )
}
