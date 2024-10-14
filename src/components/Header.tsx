import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  return (
    <header className="grid grid-cols-12 w-full gap-6 px-4 md:px-20   ">
    <div className=" col-span-2  max-sm:justify-start   flex items-center justify-center">
      <Link to={"/"}>
   <img src="logo.png" alt="Logo" className="h-20 object-cover max-sm:h-10" />
   </Link>
    
    </div>

    <nav className=" flex items-center  col-start-3 col-end-12 max-sm:col-start-4  text-white">
      <Navbar  />
      <div className='w-full flex justify-end md:hidden' >
      <FontAwesomeIcon size='lg'   icon={faBars} color='white' onClick={()=>toggleSidebar()} />
      </div>
    </nav>
    <Sidebar isOpen={isSidebarOpen} onClose={function (): void {
       setIsSidebarOpen(false)
    }} />
  </header>
  )
}

export default Header
