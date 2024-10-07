import { Link } from "react-router-dom";
import Header from "./components/Header";

const About = () => {
  return (
    <div className=" bg-black min-h-screen ">
      <div
        className="bg-cover bg-no-repeat bg h-[500px]"
        style={{
          backgroundImage: `url(imgp4.png)`,
        }}
      >
        <Header />
      </div>
      <div className="flex  justify-center items-center">
        <span className="text-orangy text-center mt-20 text-3xl font-bold uppercase">
          About us
        </span>
      </div>
      <div className=" grid grid-cols-12 w-full gap-6 px-4 md:px-20   ">
        <div className=" flex flex-col col-start-2 col-span-10 p-7 rounded-lg space-y-5">
          <div className=" flex space-x-5  p-6 rounded-lg relative">
            <div className="flex  justify-center items-center">
              <p className="text-white  font-light text-base leading-loose 6">
                Welcome to PrimeCoal, a leader in the coal mining and energy
                industry. With decades of experience and a deep commitment to
                sustainable practices, we are dedicated to providing
                high-quality coal products that power homes, businesses, and
                industries around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <span className="text-orangy text-center  text-3xl font-bold uppercase">
          Our Mission
        </span>
      </div>
      <div className=" grid grid-cols-12 w-full gap-6 px-4 md:px-20   ">
        <div className=" flex flex-col col-start-2 col-span-10 p-7 rounded-lg space-y-5">
          <div className=" flex space-x-5  p-6 rounded-lg relative">
            <div className="flex  justify-center items-center">
              <p className="text-white  font-light text-base leading-loose 6">
                At PrimeCoal, our mission is to deliver reliable energy
                solutions through responsible coal mining operations. We
                understand the importance of balancing energy needs with
                environmental stewardship, and we work tirelessly to ensure that
                our practices respect both the land and the communities we
                serve.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <span className="text-orangy text-center  text-3xl font-bold uppercase">
          Our Values
        </span>
      </div>
      <div className=" grid grid-cols-12 w-full gap-6 px-4 md:px-20   ">
        <div className=" flex flex-col col-start-2 col-span-10 p-7 rounded-lg space-y-5">
          <div className=" flex space-x-5  p-6 rounded-lg relative">
            <div className="flex  justify-center items-center">
              <p className="text-white  font-light text-base leading-loose 6">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-white">
                    <span className="font-semibold">Safety First:</span> The
                    safety of our employees, contractors, and surrounding
                    communities is our top priority. We maintain rigorous safety
                    protocols to ensure a secure and healthy working
                    environment.
                  </li>
                  <li className="text-white">
                    <span className="font-semibold">
                      Environmental Responsibility:
                    </span>{" "}
                    We are committed to minimizing our environmental impact
                    through innovative mining techniques, land reclamation, and
                    ongoing efforts to reduce emissions.
                  </li>
                  <li className="text-white">
                    <span className="font-semibold">
                      Excellence in Operations:
                    </span>{" "}
                    Our team of skilled professionals ensures efficient,
                    cost-effective mining operations while maintaining the
                    highest standards of quality and compliance.
                  </li>
                  <li className="text-white">
                    <span className="font-semibold">
                      Community Partnership:
                    </span>{" "}
                    We believe in giving back to the communities where we
                    operate. Through job creation, local investment, and
                    sustainable development initiatives, we strive to make a
                    positive, lasting impact.
                  </li>
                </ul>
              </p>
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

export default About;
