
import Navbar from "./navbar";

const BecomeDistrubutorPage = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg"
      style={{
        backgroundImage: `url(header.png)`,
      }}
    >
      <div className="grid grid-cols-12 w-full gap-6 ">
        <div className=" col-span-2 flex items-center justify-start">
          <img src="logo.png" alt="Logo" className="h-20" />
        </div>
    
        <nav className=" flex items-center  col-start-3 col-end-12 text-white">
          <Navbar />
        </nav>
      </div>
    </div>
  );
}

export default BecomeDistrubutorPage

