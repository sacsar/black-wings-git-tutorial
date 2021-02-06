import React from 'react'

export default ({children}) => (
    <div
        style={{
          width: '95vw',
          height: '95vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}
    >
    <div>{children}</div></div>
)
