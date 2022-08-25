import React, { useState } from "react"
import PropTypes from "prop-types"
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons"

EditItem.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  editMode: PropTypes.bool.isRequired,
  onChangeEditMode: PropTypes.func.isRequired,
}

export default function EditItem({ label, data, onSubmit, editMode, onChangeEditMode }) {
  const [value, setValue] = useState(data)

  function handleChangeValue(e) {
    e.preventDefault()
    setValue(e.target.value)
  }

  return (
    <>
      {editMode ? (
        <form>
          <label>
            {label}
            <input type="text" value={value} onChange={(e) => handleChangeValue(e)} />
          </label>

          <FontAwesomeIcon icon={faPaperPlane} onClick={() => onSubmit(value)} />
          <FontAwesomeIcon icon={faXmark} onClick={() => onChangeEditMode(false)} />
        </form>
      ) : (
        <p>
          {label} {data}
          <FontAwesomeIcon icon={faPen} onClick={() => onChangeEditMode(true)} />
        </p>
      )}
    </>
  )
}
