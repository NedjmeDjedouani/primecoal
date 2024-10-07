import { Link } from "react-router-dom";
import Header from "./components/Header";
const News = () => {
  return (
    <div className=" bg-black min-h-screen ">
      <div
        className="bg-cover bg-no-repeat bg"
        style={{
          backgroundImage: `url(header.png)`,
        }}
      >
    <Header/>
      </div>
    
      <div className="flex flex-col items-center ">
        <span className="text-orangy text-center mt-20 text-3xl font-bold uppercase">
          News
        </span>
        <div className="grid grid-cols-12">
          <div className=" flex flex-col bg-lightgray col-start-4 col-span-6 p-7 mt-10 rounded-lg space-y-5">
            <div className=" flex space-x-5 bg-black p-6 rounded-lg relative">
              <div className="flex  justify-center items-center text-orangy">
                <span className=" font-bold text-3xl">01</span>
              </div>
              <div className=" flex text-white">
                <p className="text-sm">
                  we have announced that we have entered into a definitive
                  agreement to combine in an all-stock merger of equals to
                  create Core Natural... Resource
                </p>
              </div>
              <div className="absolute text-white bottom-[5px] right-5 ">
                <span className="text-sm">20.09.2024</span>
              </div>
            </div>
            <div className=" flex space-x-5 bg-black p-6 rounded-lg relative ">
              <div className="flex  justify-center items-center text-orangy">
                <span className=" font-bold text-3xl">02</span>
              </div>
              <div className=" flex text-white">
                <p className="text-sm">
                  our consultation process to assess shareholder views regarding
                  retaining or demerging its coal and carbon steel materials
                  business has returned a result in favour of retention
                </p>
              </div>
              <div className="absolute text-white bottom-[5px] right-5 ">
                <span className="text-sm">30.09.2024</span>
              </div>
            </div>
            <div className=" flex space-x-5 bg-black p-6 rounded-lg relative ">
              <div className="flex  justify-center items-center text-orangy">
                <span className=" font-bold text-3xl">03</span>
              </div>
              <div className=" flex text-white">
                <p className="text-sm">
                  we have decided to build a long-distance overland conveyor for
                  its Blue Creek Mine expansion in the city.
                </p>
              </div>
              <div className="absolute text-white bottom-[5px] right-5 ">
                <span className="text-sm">04.10.2024</span>
              </div>
            </div>
            <div className=" flex space-x-5 bg-black p-6 rounded-lg relative ">
              <div className="flex  justify-center items-center text-orangy ">
                <span className=" font-bold text-3xl">04</span>
              </div>
              <div className=" flex text-white">
                <p className="text-sm">
                  At MINExpo INTERNATIONAL®, the industry’s largest global
                  mining event, you will uncover new products and transformative
                  technology that can help you increase productivity and safety.
                </p>
              </div>
              <div className="absolute text-white bottom-[5px] right-5 ">
                <span className="text-sm">06.10.2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex w-full gap-6 px-4 md:px-20 mt-32 justify-between pb-10">
        <div className="flex flex-col justify-center ">
          <div className="">
            <img src="logo.png" alt="Logo" className="h-20" />
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
            <img src="Fb.png" alt="" />
          </Link>
          <Link to="https://www.instagram.com/#:~:text=Create%20an%20account%20or%20log%20in%20to%20Instagram">
            <img src="Insta.png" alt="" />
          </Link>
          <Link to="https://web.whatsapp.com/#:~:text=Quickly%20send%20and%20receive%20WhatsApp">
            <img src="tel.png" alt="" />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default News;
