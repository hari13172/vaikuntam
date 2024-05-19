import homebg from "../../public/Assets/homebg.png";
import home1 from "../../public/Assets/home1.png";
import home2 from "../../public/Assets/home2.png";
import home3 from "../../public/Assets/home3.png";
import bag from "../../public/Assets/bag.png";

function Home() {
  return (
    <>
      <div className="p-8">
        <img
          src={homebg}
          alt=""
          className="w-full object-cover bg-no-repeat relative"
        />
      </div>
      {/* hero Section  */}
      <div className=" w-full mt-10 max-w-7xl  m-auto">
        <div className="">
          <div className="absolute top-[30%] left-[5%]">
            <h1 className=" text-7xl text-[#283A95] font-bold">Manage Your </h1>
            <h1 className="absolute left-0 text-7xl text-[#283A95] font-bold">
              Property
            </h1>
            <p className="absolute top-44 font-bold text-xl ">
              You will have everything nearby supermarker
              ,buses,stations,thecamera neighbourhood etc
            </p>

            <div className="absolute top-72 flex px-6 py-4 rounded-full bg-gray-600 text-lg">
              <button>Learn More</button>
            </div>
            <div className="absolute top-72 left-40  px-6 py-4 rounded-full text-lg bg-gray-600">
              <button>Get a Quote</button>
            </div>
          </div>
        </div>
        {/* second Section */}
        <div className="mt-10 w-full flex justify-between  py-4">
          <h1 className="text-5xl w-[30%] leading-tight font-bold">
            Our Excellent Services
          </h1>
          <p className="w-[45%] leading-9 text-lg font-semibold">
            Check out our best service you can possibly order in building Your
            company and don't forget to ask via our email or our customer
            service if you are interested in using our service
          </p>
        </div>
        <div className="lg:flex grid grid-col-1 gap-10 mt-20">
          {prop.map((a, index) => {
            return (
              <div
                key={index}
                className="lg:flex lg:flex-col grid grid-col-1 items-center text-center justify-center w-full"
              >
                <img
                  src={a.img}
                  alt=""
                  className="w-[380px] h-[250px] text-center"
                />
                <h1 className=" mt-5 font-medium text-2xl text-center">
                  {a.title}
                </h1>
                <h3 className="text-center py-2 font-semibold lg:w-[100%]">
                  {a.desc}
                </h3>
              </div>
            );
          })}
        </div>

        {/* third section */}

        <div className="mt-28 w-full flex justify-between  py-4">
          <h1 className="text-5xl w-[30%] leading-tight font-bold">
            <div className="w-[30%] h-[10px] bg-[#2F3C7E]"></div>
            Our Excellent Services
          </h1>
          <p className="w-[45%] leading-9 text-lg font-semibold">
            Check out our best service you can possibly order in building Your
            company and don't forget to ask via our email or our customer
            service if you are interested in using our service
          </p>
        </div>
        <div className="w-full flex items-center gap-14 mt-20">
          {different.map((a, index) => {
            return (
              <div
                key={index}
                className="gap-10 flex justify-center items-center flex-col w-full "
              >
                <div>
                <img src={a.img} alt="" className="text-center"/>
                </div>
                <h1 className="text-2xl font-bold">{a.title}</h1>
                <p className="text-lg font-semibold text-center leading-10 ">{a.desc}</p>
              </div>
            );
          })}
        </div>
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

const different = [
  {
    img: bag,
    title: "Experienced",
    desc: "our experience of 25 years of building and making achievements in the world of development",
  },
  {
    img: bag,
    title: "Competitive price",
    desc: "The prices we offer you arevery competitive withoutreducing the quality of thecompany's work in the slightest",
  },
  {
    img: bag,
    title: "On Time",
    desc: "The prices we offer you arevery competitive withoutreducing the quality of thecompany's work in the slightest",
  },
  {
    img: bag,
    title: "Best Materials",
    desc: "The material determines the building itself so we recommend that you use the best & quality materials in its class.",
  },
];
