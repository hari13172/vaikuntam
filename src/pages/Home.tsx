import homebg from "../../public/Assets/homebg.png";
import home1 from "../../public/Assets/home1.png";
import home2 from "../../public/Assets/home2.png";
import home3 from "../../public/Assets/home3.png";

function Home() {
  return (
    <>
      <div>
        <img
          src={homebg}
          alt=""
          className="w-full object-cover bg-no-repeat relative"
        />
      </div>
        {/* hero Section  */}
      <div className=" w-full mt-10 max-w-7xl  m-auto">
        <div className="">
          <div className="absolute top-[40%] left-[13%]">
            <h1 className=" text-6xl text-blue-800 font-bold">Manage Your </h1>
            <h1 className="absolute left-0 text-6xl text-blue-800 font-bold">
              Property
            </h1>
            <p className="absolute top-40 font-semibold">
              You will have everything nearby supermarker,
            </p>
            <p className="absolute top-44 font-semibold">
              buses,stations,the camera neighbourhood etc
            </p>
            <div className="absolute top-56 flex gap-10  px-8 py-3 rounded-full bg-gray-600">
              <button>learn More</button>
            </div>
            <div className="absolute top-56 left-40 flex gap-10 px-8 py-3 rounded-full  bg-gray-600">
              <button>Get a Quote</button>
            </div>
          </div>
        </div>
        {/* second Section */}
        <div className="mt-10 w-full flex justify-between p-8">
          <h1 className="text-4xl w-[20%] font-medium">
            Our Excellent Services
          </h1>
          <p className="w-[45%]">
            Check out our best service you can possibly order in building Your
            company and don't forget to ask via our email or our customer
            service if you are interested in using our service
          </p>
        </div>
        <div className="lg:flex  grid grid-col-1  gap-10">
          {prop.map((a, index) => {
            return (
              <div
                key={index}
                className="lg:flex lg:flex-col grid grid-col-1  justify-center w-full"
              >
                <img src={a.img} alt="" className="w-[500px] h-[300px]" />
                <h1 className=" mt-5 font-medium text-center">{a.title}</h1>
                <h3 className="text-center py-2 font-normal lg:w-[100%]">
                  {a.desc}
                </h3>
              </div>
            );
          })}
        </div>

        {/* third section */}
      </div>
    </>
  );
}

export default Home;

// second section data
const prop = [
  {
    img: home1,
    title: "PROPERTY MANAGEMENT",
    desc: "Expert property management solutions for your peace of mind",
  },
  {
    img: home2,
    title: "SELLING",
    desc: "Unlock the door of your dream Home with Our Seamless Selling process",
  },
  {
    img: home3,
    title: "RESIDENTIALS",
    desc: "Residential development is the Beginning that has shaped us Our process",
  },
];
