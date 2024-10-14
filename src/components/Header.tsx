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
    <header className="grid grid-cols-12 w-full gap-6 px-4 md:px-20  ">
    <div className=" col-span-2 max-sm:col-span-2   flex items-center justify-start">
      <Link to={"/"}>
   <img src="logo.png" alt="Logo" className="h-20 object-cover" />
   </Link>
    
    </div>

    <nav className=" flex items-center max-sm:col-span-8  sm:col-start-3 sm:col-end-12  text-white">
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
