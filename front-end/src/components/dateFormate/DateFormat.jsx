import React from 'react'

const DateFormat = ({children , isMouseHover}) => {
  return (
    <div className={`${isMouseHover ? 'text-primaryTitle font-bold ':''}`}>
        {children}
    </div>
  )
}

export default DateFormat