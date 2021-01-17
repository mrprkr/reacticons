import React from 'react'
import IconComponentWrapper from '../../../IconComponentWrapper'

import { IconProps } from '../..'

const Settings = ({ size = 24, color = '#CCCCCC', style, containerStyle }: IconProps) => {
  return (
    <IconComponentWrapper alt="settings icon" style={containerStyle}>
      <svg width={size} height={size} viewBox={`0 0 24 24`} fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
       <path d="M16.2921 7C16.096 7.00209 15.928 7.07163 15.7881 7.20903L12.0025 10.9997L8.21144 7.20903C8.07489 7.07163 7.909 7.00209 7.71296 7C7.51692 7.00209 7.34894 7.07163 7.20903 7.20903C7.07163 7.34894 7.00209 7.51692 7 7.71296C7.00209 7.909 7.07163 8.07489 7.20903 8.21144L10.9997 12.0025L7.20903 15.7881C7.07163 15.928 7.00209 16.096 7 16.2921C7.00209 16.4881 7.07163 16.654 7.20903 16.7905C7.34894 16.9317 7.51692 17.0012 7.71296 17C7.909 17.0012 8.07489 16.9317 8.21144 16.7905L12.0025 13.0054L15.7881 16.7905C15.928 16.9317 16.096 17.0012 16.2921 17C16.4881 17.0012 16.654 16.9317 16.7905 16.7905C16.9317 16.654 17.0012 16.4881 17 16.2921C17.0012 16.096 16.9317 15.928 16.7905 15.7881L13.0054 12.0025L16.7905 8.21144C16.9317 8.07489 17.0012 7.909 17 7.71296C17.0012 7.51692 16.9317 7.34894 16.7905 7.20903C16.654 7.07163 16.4881 7.00209 16.2921 7Z" fill={color}/>
      </svg>
    </IconComponentWrapper>
  )
}

export default Settings