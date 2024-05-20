import homebg from "../../public/Assets/homebg.png";
import home1 from "../../public/Assets/home1.png";
import home2 from "../../public/Assets/home2.png";
import home3 from "../../public/Assets/home3.png";
import bag from "../../public/Assets/bag.png";
import vector from "../../public/Assets/Vector2.png";
import house1 from "../../public/Assets/house1.png";
import house2 from "../../public/Assets/house2.png";
import house3 from "../../public/Assets/house3.png";
import { CiStar } from "react-icons/ci";

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
                className="gap-10 flex justify-center items-center flex-col w-full"
              >
                <div className="flex justify-center items-center">
                  <div className="p-2 rounded-full bg-[#C1DEE8]">
                    <div className="rounded-full p-2 bg-[#EFE4D6]">
                      <img src={a.img} alt="" className="w-[40px] h-[40px]" />
                    </div>
                  </div>
                </div>
                <h1 className="text-2xl font-bold">{a.title}</h1>
                <p className="text-lg font-semibold text-center leading-10 ">
                  {a.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Fourth section  */}
        <div className="mt-20 ">
          <div className="text-center font-bold text-4xl">
            <h1>Explore Our Properties</h1>
          </div>
          <div className="flex mt-20 gap-10 ">
            {Three.map((a, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col border-2 rounded-lg w-full"
                >
                  <img src={a.img} alt="" className="" />
                  <div className="p-6 py-10 ">
                    <h1 className="text-2xl font-bold">{a.title1}</h1>
                    <h1 className="text-2xl font-bold">{a.title2}</h1>
                    <p className="py-2 w-[80%] font-medium text-lg">{a.para}</p>
                    <div className="flex gap-2 py-2">
                      <span>{a.svg}</span>
                      <span>{a.svg}</span>
                      <span>{a.svg}</span>
                      <span>{a.svg}</span>
                      <span>{a.svg1}</span>
                      <span className="px-5">{a.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
              <button className="bg-[#403F3F] px-8 py-3 text-xl font-bold text-white rounded-lg">All Property</button>
          </div>
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
    img: vector,
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

const Three = [
  {
    img: house1,
    title1: "Sobha Hearland II ",
    title2: "Villas",
    para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    svg: (
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8329 20.4467L5.56572 24.1734C5.20291 24.3892 4.75253 24.086 4.81581 23.6687L6.02778 15.6761L0.839721 9.95613C0.57359 9.66271 0.738098 9.19108 1.12899 9.12684L8.24514 7.95726L11.3746 0.785026C11.5492 0.384974 12.1166 0.384973 12.2912 0.785025L15.4207 7.95726L22.5368 9.12684C22.9277 9.19108 23.0922 9.66271 22.8261 9.95613L17.638 15.6761L18.85 23.6687C18.9133 24.086 18.4629 24.3892 18.1001 24.1734L11.8329 20.4467Z"
          fill="#F59914"
        />
      </svg>
    ),
    svg1: (
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4697 20.4467L5.5782 24.1404C5.21742 24.3666 4.75708 24.0671 4.81769 23.6456L5.96386 15.6761L1.03285 9.94402C0.779623 9.64966 0.943931 9.19159 1.32652 9.12529L8.06691 7.95726L11.0077 0.851117C11.1781 0.439376 11.7613 0.439376 11.9317 0.851117L14.8725 7.95726L21.6129 9.12529C21.9955 9.19159 22.1598 9.64966 21.9066 9.94402L16.9756 15.6761L18.1217 23.6456C18.1824 24.0671 17.722 24.3666 17.3612 24.1404L11.4697 20.4467Z"
          stroke="#9B9B9B"
        />
      </svg>
    ),
    rating: "4.83",
  },
  {
    img: house1,
    title1: "Sobha Hearland II ",
    title2: "Villas",
    para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    svg: (
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8329 20.4467L5.56572 24.1734C5.20291 24.3892 4.75253 24.086 4.81581 23.6687L6.02778 15.6761L0.839721 9.95613C0.57359 9.66271 0.738098 9.19108 1.12899 9.12684L8.24514 7.95726L11.3746 0.785026C11.5492 0.384974 12.1166 0.384973 12.2912 0.785025L15.4207 7.95726L22.5368 9.12684C22.9277 9.19108 23.0922 9.66271 22.8261 9.95613L17.638 15.6761L18.85 23.6687C18.9133 24.086 18.4629 24.3892 18.1001 24.1734L11.8329 20.4467Z"
          fill="#F59914"
        />
      </svg>
    ),
    svg1: (
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4697 20.4467L5.5782 24.1404C5.21742 24.3666 4.75708 24.0671 4.81769 23.6456L5.96386 15.6761L1.03285 9.94402C0.779623 9.64966 0.943931 9.19159 1.32652 9.12529L8.06691 7.95726L11.0077 0.851117C11.1781 0.439376 11.7613 0.439376 11.9317 0.851117L14.8725 7.95726L21.6129 9.12529C21.9955 9.19159 22.1598 9.64966 21.9066 9.94402L16.9756 15.6761L18.1217 23.6456C18.1824 24.0671 17.722 24.3666 17.3612 24.1404L11.4697 20.4467Z"
          stroke="#9B9B9B"
        />
      </svg>
    ),
    rating: "4.83",
  },
  {
    img: house1,
    title1: "Sobha Hearland II ",
    title2: "Villas",
    para: "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.",
    svg: (
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8329 20.4467L5.56572 24.1734C5.20291 24.3892 4.75253 24.086 4.81581 23.6687L6.02778 15.6761L0.839721 9.95613C0.57359 9.66271 0.738098 9.19108 1.12899 9.12684L8.24514 7.95726L11.3746 0.785026C11.5492 0.384974 12.1166 0.384973 12.2912 0.785025L15.4207 7.95726L22.5368 9.12684C22.9277 9.19108 23.0922 9.66271 22.8261 9.95613L17.638 15.6761L18.85 23.6687C18.9133 24.086 18.4629 24.3892 18.1001 24.1734L11.8329 20.4467Z"
          fill="#F59914"
        />
      </svg>
    ),
    svg1: (
      <svg
        width="23"
        height="25"
        viewBox="0 0 23 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.4697 20.4467L5.5782 24.1404C5.21742 24.3666 4.75708 24.0671 4.81769 23.6456L5.96386 15.6761L1.03285 9.94402C0.779623 9.64966 0.943931 9.19159 1.32652 9.12529L8.06691 7.95726L11.0077 0.851117C11.1781 0.439376 11.7613 0.439376 11.9317 0.851117L14.8725 7.95726L21.6129 9.12529C21.9955 9.19159 22.1598 9.64966 21.9066 9.94402L16.9756 15.6761L18.1217 23.6456C18.1824 24.0671 17.722 24.3666 17.3612 24.1404L11.4697 20.4467Z"
          stroke="#9B9B9B"
        />
      </svg>
    ),
    rating: "4.83",
  },
];
