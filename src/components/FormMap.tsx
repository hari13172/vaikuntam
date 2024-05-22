import React from "react";

function FormMap() {
  return (
    <div className=" mt-44 max-w-7xl m-auto flex flex-col ">
      <div className="w-full flex justify-between items-center px-24">
        <div className="">
          <h1 className="font-semibold text-5xl">Get in Touch with us</h1>
          <form action="" className="mt-10 flex flex-col gap-3">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-[450px] h-[50px] px-4 rounded-lg border-2"
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-[450px] h-[50px] px-4 rounded-lg border-2"
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Type Your Query here....."
              className="w-[450px] h-[100px] px-4 rounded-lg border-2"
            />
            <button className=" w-fit mt-5 bg-[#403F3F] px-8 py-3 text-xl font-bold text-white rounded-lg">
              Send My message
            </button>
          </form>
        </div>
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.258466830602!2d80.27542456189911!3d13.082798919300268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265067fc9da4b%3A0xcd5741576fea320c!2sChennai%20Central%20Railway%20Station!5e0!3m2!1sen!2sin!4v1716371869867!5m2!1sen!2sin"
            width="500"
            height="550"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FormMap;
