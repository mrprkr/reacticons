import React from 'react'
import IconComponentWrapper from '../IconComponentWrapper'

// Helper component to size and color the logo
const Example = ({ size = 24, color = '#CCCCCC' }) => {
  // stroke="black" stroke-width="10"

  return (
    <IconComponentWrapper alt="example icon">
      <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5C8.68512 1.5 6 4.18512 6 7.5V10.5H3V22.5H21V10.5H18V7.5C18 4.18512 15.3149 1.5 12 1.5ZM12 4.5C13.785 4.5 15 5.715 15 7.5V10.5H9V7.5C9 5.715 10.215 4.5 12 4.5Z" fill={color}/>
      </svg>
    </IconComponentWrapper>
  )
}

export default Example