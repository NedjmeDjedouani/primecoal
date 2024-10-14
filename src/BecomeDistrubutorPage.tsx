import { Link } from "react-router-dom";
import Header from "./components/Header";

const BecomeDistrubutorPage = () => {
  return (
    <div className=" bg-black min-h-screen ">
      <div
        className="bg-cover bg-no-repeat bg"
        style={{
          backgroundImage: `url(header.png)`,
        }}
      >
        <Header />
      </div>
      <section>
        <div className=" grid grid-cols-12 w-full gap-6 px-4 md:px-20 mt-40  ">
          <div className="flex col-span-3 max-sm:col-span-12 max-sm:justify-center items-center">
            <img className="h-[300px] object-cover " src="product.png" alt="" />
          </div>
          <div className="text-white flex flex-col space-y-5 font-light max-sm:text-xs text-base leading-loose  col-span-6 max-sm:col-span-9">
            <p>
              Weight: 1 kg <br /> Number of cubes: 72 <br /> Size: 25x25x25{" "}
              <br />
              Features: The box is additionally packed in heat resistant film
              ,Inside the box 2 individual bags Minimum order quantity: 30 kg
              Delivery: self-delivery from the warehouse in Moscow / by
              transportation company (cost not included) The transportation box
              contains 10 pack
            </p>
            <div className="grid-cols-12 grid  gap-6 justify-between ">
              <div className="   bg-lightgray flex flex-col justify-between rounded-lg px-7 py-2 text-center col-span-4 max-sm:w-1/2 mx-auto  max-sm:col-span-12">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
              <div className="   bg-lightgray flex flex-col justify-between rounded-lg px-7 py-2 text-center col-span-4 max-sm:w-1/2  mx-auto  max-sm:col-span-12">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
              <div className="   bg-lightgray flex flex-col justify-between rounded-lg px-7 py-2 text-center col-span-4 max-sm:w-1/2  mx-auto  max-sm:col-span-12">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-12 max-xs:text-xs max-sm:font-light ">
        <div className="bg-lightgray grid grid-cols-12 mt-32 col-start-2 col-end-12  px-[23px] py-[25px] rounded-lg">
          <p className="text-white flex  col-span-4 mt-5 max-sm:w-full max-sm:col-span-12  ">
            Become Our Distributor. <br /> We invite you to become a part of our
            team and join our successful business of selling premium charcoal If
            you want to expand your product range and offer your customers the
            highest quality products, this is the offer for you!
          </p>

          <div className="flex flex-col  col-span-8  space-y-5 max-sm:mt-5 max-sm:w-full max-sm:col-span-12">
            <div className="gap-6 grid grid-cols-2  max-sm:flex-col max-sm:grid-cols-1  text-white outline-none w-10/12">
              <input
                className="input-style"
                name="email"
                placeholder="Email"
                type="email"
              />

              <input
                className="input-style"
                name="name"
                placeholder="Name"
                type="text"
              />

              <input
                className="input-style"
                name="city"
                placeholder="City"
                type="text"
              />

              <input
                className="input-style"
                name="Company"
                placeholder="Company"
                type="text"
              />

              <input
                className="input-style"
                name="Phone Number"
                placeholder="Phone Number"
                type="tel"
              />

              <input
                className="input-style"
                name="quantity"
                placeholder="Quantity per month"
                type="number"
              />
            </div>
            <div className="flex justify-end w-full">
              <button className=" bg-orangy rounded-lg text-white font-bold px-4 py-2 uppercase  ">
                contact us
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="flex w-full gap-6 px-4 md:px-20 mt-32 justify-between pb-10">
        <div className="flex flex-col justify-center ">
          <div className="">
            <img src="logo.png" alt="Logo" className="h-20 object-cover" />
          </div>
          <div className="flex justify-center">
            <p className="text-slate-300 text-xs">©2024</p>
          </div>
        </div>
        <div className="flex flex-col text-white space-y-[20px] ">
          <span className="text-orangy">Contacts</span>
          <span>+7 (901) 772-0000</span>
          <span>primecoal@info.com</span>
        </div>
        <div className="flex items-center space-x-3 justify-between">
          <Link to="https://www.facebook.com/?locale=fr_FR">
            <img src="Fb.png" alt="Facebook Link" />
          </Link>
          <Link to="https://www.instagram.com/#:~:text=Create%20an%20account%20or%20log%20in%20to%20Instagram">
            <img src="Insta.png" alt="Instagram Link" />
          </Link>
          <Link to="https://web.whatsapp.com/#:~:text=Quickly%20send%20and%20receive%20WhatsApp">
            <img src="tel.png" alt="Whatsapp Link" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default BecomeDistrubutorPage;
