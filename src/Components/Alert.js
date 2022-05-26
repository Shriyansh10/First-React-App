import React from 'react'

function Alert(props) {
  return (
    <div style={{height: "50px", marginBottom: "10px"}}>
    {props.alert && <div className={`alert alert-${props.alert.type} warning alert-dismissible fade show`} role="alert">
        <strong>Success!</strong> {props.alert.message}
    </div>}
    </div>
  )
}

export default Alert