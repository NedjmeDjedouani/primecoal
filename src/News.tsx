import Header from "./components/Header";
import NewsItem from "./components/NewsItem";
import { NEWS } from "./constants";
import Footer from "./components/Footer";
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
      <Footer/>
    </div>
  );
};

export default News;
