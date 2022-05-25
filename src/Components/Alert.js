import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} warning alert-dismissible fade show`} role="alert">
        <strong>Success!</strong> {props.alert.message}
    </div>
  )
}

export default Alert