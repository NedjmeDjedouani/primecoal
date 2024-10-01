import Navbar from "./navbar";

function App() {
  return (
    <div>
      <section
        className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center px-4 md:px-20 "
        style={{
          backgroundImage: `url(background.png)`,
        }}
      >
        <header className="grid grid-cols-12 w-full gap-6 mt-4 ">
          <div className="col-span-2 flex items-center">
            <img src="logo.png" alt="Logo" className="h-20" />  
          </div>
          <nav className="col-start-3 col-end-13  text-white items-center flex ">
            <Navbar />
          </nav>
        </header>
      
        <div className="flex flex-col flex-grow justify-center items-center text-center mt-10">
          <h1 className="text-white text-2xl mb-4">
            Our charcoal is characterized by high quality and natural
            composition, which makes it an ideal choice for our users.
          </h1>
          <button className="text-white bg-orange-300 px-8 py-2 rounded-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
