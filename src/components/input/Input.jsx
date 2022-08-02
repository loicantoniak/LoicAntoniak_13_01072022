import React from "react"
import style from "./Input.module.scss"
import PropTypes from "prop-types"
import { Formik, Field, Form } from "formik"
import * as yup from "yup"
import backend from "../../services/backend"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../../redux/reducers/user"

Input.propTypes = {
  onHideEditMode: PropTypes.func.isRequired,
}

const EditSchema = yup.object().shape({
  firstName: yup.string().required("FirstName is required"),
  lastName: yup.string().required("LastName is required"),
})

export default function Input({ onHideEditMode }) {
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  async function handleSubmit(values, { setSubmitting }) {
    try {
      setSubmitting(false)
      const res = await backend.user.updateUserName(values, token)
      dispatch(setUser(res.data.body))
      onHideEditMode()
    } catch (error) {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={{
        firstName: firstName,
        lastName: lastName,
      }}
      onSubmit={handleSubmit}
      validationSchema={EditSchema}
    >
      {({ errors, touched, isSubmitting, isValid, dirty }) => (
        <Form>
          <div className={style.container}>
            <div className={style.inputWrapper}>
              <Field id="firstName" name="firstName" type="text" />
              {touched.firstName && errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>

            <div className={style.inputWrapper}>
              <Field id="lastName" name="lastName" type="text" />
              {touched.lastName && errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>
          </div>

          <button type="submit" className="button" disabled={!(dirty && !isSubmitting && isValid)}>
            {isSubmitting ? "loading..." : "Save"}
          </button>
          <button className="button button-secondary" onClick={onHideEditMode}>Cancel</button>
        </Form>
      )}
    </Formik>
  )
}
