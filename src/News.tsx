import { Link } from "react-router-dom";
import Header from "./components/Header";
import NewsItem from "./components/NewsItem";
import { NEWS } from "./constants";
const News = () => {
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

      <div className="flex flex-col items-center ">
        <span className="text-orangy text-center mt-20 text-3xl font-bold uppercase">
          News
        </span>
        <div className="grid grid-cols-12">
          <div className=" flex flex-col bg-lightgray max-sm:p-2 max-sm:col-span-12 max-sm:m-2 col-start-4 col-span-6 max-lg:col-span-10 max-lg:col-start-2 p-7 mt-10 rounded-lg space-y-5">
            {NEWS.map((item) => (
              <NewsItem content={item.content} id={item.id} key={item.id} date={item.date} />
            ))}
          </div>
        </div>
      </div>
      <footer className="flex w-full gap-6 px-4 md:px-20 mt-32 justify-between items-center max-sm:mt-4 pb-10">
        <div className="flex flex-col justify-center ">
          <div className="">
            <img src="logo.png" alt="Logo" className="h-20 object-cover"  />
          </div>
          <div className="flex justify-center">
            <p className="text-slate-300 text-xs">©2024</p>
          </div>
        </div>
        <div className="flex flex-col text-white  max-sm:text-sm  max-sm:space-y-1   space-y-5 ">
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
