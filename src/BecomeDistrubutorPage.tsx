
import Navbar from "./navbar";

const BecomeDistrubutorPage = () => {
  return (
    <div className=" bg-black min-h-screen">
      <div
        className="bg-cover bg-no-repeat bg"
        style={{
          backgroundImage: `url(header.png)`,
        }}
      >
        <div className="grid grid-cols-12 w-full gap-6 px-4 md:px-20 ">
          <div className=" col-span-2 flex items-center justify-start">
            <img src="logo.png" alt="Logo" className="h-20" />
          </div>

          <nav className=" flex items-center  col-start-3 col-end-12 text-white">
            <Navbar />
          </nav>
        </div>
      </div>
      <section>
        <div className=" grid grid-cols-12 w-full gap-6 px-4 md:px-20 mt-40  ">
          <div className="flex col-span-3">
            <img className="h-[300px] " src="product.png" alt="" />
          </div>
          <div className="text-white flex flex-col space-y-5 font-light text-base leading-loose  col-span-6">
            <p>
              Weight: 1 kg <br /> Number of cubes: 72 <br /> Size: 25x25x25{" "}
              <br />
              Features: The box is additionally packed in heat resistant film
              ,Inside the box 2 individual bags Minimum order quantity: 30 kg
              Delivery: self-delivery from the warehouse in Moscow / by
              transportation company (cost not included) The transportation box
              contains 10 pack
            </p>
            <div className="flex justify-between ">
              <div className="   bg-lightgray flex flex-col justify-between rounded-lg px-7 py-2 text-center ">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
              <div className="   bg-lightgray flex flex-col justify-between rounded-lg px-7 py-2 text-center ">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
              <div className="   bg-lightgray flex flex-col justify-between rounded-lg px-7 py-2 text-center ">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BecomeDistrubutorPage

