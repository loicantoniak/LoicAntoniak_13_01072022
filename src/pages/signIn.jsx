import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { Formik, Field, Form } from "formik"
import * as yup from "yup"
import backend from "../services/backend"

const initialValues = {
  email: "",
  password: "",
  remember: false,
}

const signShema = yup.object().shape({
  email: yup.string().email("L'adresse email n'est pas valide.").required("L'adresse email est requise."),
  password: yup.string().required("Le mot de passe est requis."),
})

export default function signIn() {
  async function handleSubmit(values, actions) {
    try {
      const res = await backend.auth.login(values)
      actions.setSubmitting(false)

      console.log(res)
    } catch (error) {
      actions.setSubmitting(false)
    }
  }

  return (
    <main className="signin">
      <section className="signin-content">
        <FontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signShema}>
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

              <button className="sign-in-button" disabled={!(dirty && !isSubmitting && isValid)}>
                {isSubmitting ? "loading..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  )
}
