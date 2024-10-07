import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-black flex flex-col">
      <section
        className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center px-4 md:px-20 "
        style={{
          backgroundImage: `url(background.png)`,
        }}
      >
        <div className="grid grid-cols-12 w-full gap-6 mt-4">
          <div className=" col-span-2 flex items-center justify-start">
            <img src="logo.png" alt="Logo" className="h-20" />
          </div>
          <nav className=" flex items-center  col-start-3 col-end-12 text-white max-md:hidden ">
            <Navbar />
          </nav>
          <nav className="flex "></nav>
        </div>
        <div className="flex flex-col flex-grow justify-center items-center text-center mt-10">
          <h1 className="text-white text-2xl mb-4 font-extrabold uppercase">
            Our charcoal is characterized by high quality and natural
            composition,
            <br /> which makes it an ideal choice <br /> for our users.
          </h1>
          <button className="text-white bg-orangy px-8 py-2 rounded-lg uppercase font-bold hover:bg-orange-600">
            Contact Us
          </button>
        </div>
      </section>
      <section className="w-full mt-20   ">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="text-white uppercase font-bold text-center pb-[50px] ">
            the Best Sustainable Barbecue Charcoal you will ever use!
          </h1>
        </div>
        <div className="grid grid-cols-12 h-[600px] gap-6  px-4 md:px-20">
          <div
            className="col-span-4 bg-cover bg-no-repeat bg-bottom text-white flex flex-col p-4 space-y-5 font-light text-sm leading-loose  "
            style={{
              backgroundImage: `url("main-card.png")`,
            }}
          >
            <p>
              Variety of charcoal types: Offering a range of options to suit
              different grilling needs
            </p>
            <p>
              Eco-friendly packaging: Use recyclable or biodegradable packaging
              materials. Highlight any initiatives to reduce plastic use or
              carbon footprint in the production and distribution process.
            </p>
          </div>
          <div className=" col-span-4  flex flex-col space-y-5">
            <div className=" bg-lightgray rounded-lg basis-full ">
              <div className=" text-white space-y-5 p-4 font-light text-sm leading-loose">
                <p>
                  made exclusively from natural materials. This ensures purity
                  and safety of use, which is especially important for
                  maintaining health.
                </p>
                <p>
                  Customer satisfaction guarantee: A strong return policy or
                  money-back guarantee if customers are not completely satisfied
                  with their purchase. This builds trust and shows confidence in
                  the product.
                </p>
              </div>
            </div>
            <div className=" bg-lightgray rounded-lg basis-full ">
              <div className=" text-white space-y-5 p-4  font-light text-sm leading-loose">
                <p>Competition-grade charcoal for BBQ enthusiast</p>
                <p>
                  Low smoke output: Highlight how the charcoal produces minimal
                  smoke, making it ideal for both outdoor and indoor (with
                  proper ventilation) grilling. This feature is particularly
                  appealing for those in urban settings or with close neighbors.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-span-4  flex flex-col space-y-5">
            <div className=" bg-lightgray rounded-lg basis-full  ">
              <div className=" text-white space-y-5 p-4 font-light text-sm leading-loose">
                <p>
                  Variety of charcoal types: Offering a range of options to suit
                  different grilling needs
                </p>
                <p>
                  Eco-friendly packaging: Use recyclable or biodegradable
                  packaging materials. Highlight any initiatives to reduce
                  plastic use or carbon footprint in the production and
                  distribution process.
                </p>
              </div>
            </div>
            <div className=" bg-lightgray rounded-lg basis-full ">
              <div className=" text-white space-y-5 p-4  font-light text-sm leading-loose">
                <p>
                  Competitive pricing: Highlight any bulk discounts,
                  subscription services, or special offers that provide value to
                  customers. Emphasize the balance of quality and affordability.
                </p>
                <p>
                  we offer fast and reliable shipping, with quick processing
                  times and partnerships with reliable carriers, and offers free
                  shipping on orders over a certain amount.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img className=" mt-[151px]" src="imgg.png" alt="" />
    </div>
  );
};

export default Home;
