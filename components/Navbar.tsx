import React from 'react'

interface Navbar {
    username: string;
}

const Navbar:React.FC<Navbar> = ({username}) => {
  return (
    <nav className="flex flex-row items-center justify-end p-4">
      <div className="mr-4">
      </div>
      <div>
        Hello, {username}
      </div>
    </nav>
  )
}

export default Navbar