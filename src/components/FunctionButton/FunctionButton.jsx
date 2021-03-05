/* eslint-disable react/prop-types */
import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const FunctionButton = props => {
  return (
    <button className="menu-button" onClick={props.func}>
        {!props.loading ? <span>{props.value}</span> : <ClipLoader color={'white'} size={15}/>}
    </button>
  )
}

export { FunctionButton }
