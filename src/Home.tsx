import { motion } from "framer-motion";
import FeatureCard from "./components/FeatureCard";
import Header from "./components/Header";
import MainFeatureCard from "./components/MainFeatureCard";
import { FeaturesParagraphs } from "./constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-black flex flex-col">
      <section className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center bg-backgroundImg  ">
        <Header />
        <div className="flex flex-col flex-grow justify-center items-center  mt-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white  xl:text-3xl text-xl mx-20 text-center max-sm:text-xs max-sm:mx-0 mb-4 font-extrabold max-sm:font-bold uppercase"
          >
            Our charcoal is characterized by high quality and natural
            composition, which makes it an ideal choice for{" "}
            <span className="text-orangy"> our users. </span>
          </motion.h1>
          <motion.button
          onClick={()=>{
            navigate('/become-distributor')
          }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-white bg-orangy px-8 mt-4 py-2 rounded-lg uppercase font-bold hover:bg-orange-600"
          >
            Become Destributor
          </motion.button>
        </div>
      </section>
      <section className="w-full mt-20   ">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="text-white max-sm:text-sm max-sm:font-medium     uppercase font-bold text-center pb-[50px] ">
            the Best Sustainable Barbecue Charcoal you will ever use!
          </h1>
        </div>
        <div className="grid grid-cols-12 w-full max-lg:grid-cols-2  max-md:grid-cols-1 h-[600px] gap-6 max-xl:h-auto px-4 md:px-20">
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            transition={{ duration: "0.3", ease: "easeOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, translateX: "0" }}
            className="col-span-4 max-lg:col-span-1 max-md:w-1/2 max-sm:w-full  mx-auto   row-span-2 text-white flex flex-col font-light text-sm leading-loose"
          >
            <MainFeatureCard />
          </motion.div>

          {[2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, translateY: "-10%", scale: "0" }}
              transition={{
                duration: "0.5",
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              whileInView={{ opacity: 1, translateY: "0", scale: "100%" }}
              viewport={{ once: true }}
              className="col-span-4 max-lg:col-span-1 max-md:w-1/2 mx-auto max-sm:w-full  "
            >
              <FeatureCard paragraphs={FeaturesParagraphs[index]} />
            </motion.div>
          ))}
        </div>
      </section>
      <img className=" mt-[151px]" src="imgg.png" alt="" />
    </div>
  );
};

export default Home;
