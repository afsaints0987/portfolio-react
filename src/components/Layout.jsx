import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="d-flex flex-column vh-100 mx-auto justify-content-center align-items-center text-center">
        {children}
    </div>
  )
}

export default Layout