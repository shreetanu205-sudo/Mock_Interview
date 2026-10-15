import React from 'react'

const Button = ({text,onClick}) => {
  return (
    <div>
      <button type="button" onClick={onClick} className="btn">
        {text}
      </button>
    </div>
  )
}

export default Button
