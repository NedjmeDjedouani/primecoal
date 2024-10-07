import Navbar from '../Navbar'

const Header = () => {
  return (
    <header className="grid grid-cols-12 w-full gap-6 px-4 md:px-20 ">
    <div className=" col-span-2 flex items-center justify-start">
      <img src="logo.png" alt="Logo" className="h-20" />
    </div>

    <nav className=" flex items-center  col-start-3 col-end-12 text-white">
      <Navbar />
    </nav>
  </header>
  )
}

export default Header
