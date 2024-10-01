import Navbar from "./navbar";

function App() {
	return (
    <div>
      <div
        className="min-h-screen max-w flex flex-col bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${"background.png"})`,
        }}
      >
        <div className=" grid grid-cols-12 w-full gap-6  ">
            <div className="  col-span-2 ">
              <img src="logo.png" alt="" className=" h-[80px]" />
            </div>
            <nav className=" col-start-3 col-end-12  mt-10 text-white">
              <Navbar></Navbar>
            </nav>
        
        </div>
      </div>
    </div>
  );
}

export default App;
