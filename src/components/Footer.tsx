import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="grid grid-cols-12 w-full gap-6 px-4 md:px-20 mt-32  max-sm:mt-4 pb-10">
    <div className="flex flex-col col-span-2 max-sm:justify-start    items-center justify-center ">
      <div className="">
        <img src="logo.png" alt="Logo" className="h-20 object-cover max-sm:h-10"  />
      </div>
      <div className="flex justify-center">
        <p className="text-slate-300 text-xs">©2024</p>
      </div>
    </div>
    <div className='col-span-10 flex justify-between'>
    <div className="flex flex-col text-white  max-sm:text-sm  max-sm:space-y-1   space-y-5 ">
      <span className="text-orangy">Contacts</span>
      <span>+7 (901) 772-0000</span>
      <span>primecoal@info.com</span>
    </div>
    <div className="flex items-center space-x-3 justify-between ">
      <Link to="https://www.facebook.com/?locale=fr_FR" className='size-6'>
        <img src="Fb.png" alt="" />
      </Link>
      <Link to="https://www.instagram.com/#:~:text=Create%20an%20account%20or%20log%20in%20to%20Instagram" className='size-6'>
        <img src="Insta.png" alt="" />
      </Link>
      <Link to="https://web.whatsapp.com/#:~:text=Quickly%20send%20and%20receive%20WhatsApp" className='size-6'>
        <img src="tel.png" alt="" />
      </Link>
    </div>
    </div>
  </footer>
  )
}

export default Footer
