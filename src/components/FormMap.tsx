function FormMap() {
  return (
    <div className=" lg:mt-44 mt-36 max-w-7xl m-auto flex flex-col ">
      <div className="w-full lg:flex justify-between  px-24 grid grid-col-1">
        <div className="lg:border-none border-2 lg:ml-0 ml-[-83px] lg:p-0 p-4">
          <h1 className="font-bold lg:text-5xl text-2xl leading-tight text-center">
            Get in Touch with us
          </h1>
          <form
            action=""
            className="mt-10 flex flex-col gap-3"
          >
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="lg:w-[450px] lg:h-[50px] w-[300px] h-[50px] px-4 rounded-lg border-2"
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="lg:w-[450px] lg:h-[50px] w-[300px] h-[50px] px-4 rounded-lg border-2"
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Type Your Query here....."
              className="lg:w-[450px] lg:h-[50px] w-[300px] h-[80px] px-4 rounded-lg border-2"
            />
            <button className=" text-center lg:w-fit mt-5 bg-[#403F3F] px-8 py-3 text-lg font-semibold text-white rounded-lg">
              Send My message
            </button>
          </form>
        </div>
        <div className="lg:ml-0 ml-[-70px] lg:mt-0 mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.258466830602!2d80.27542456189911!3d13.082798919300268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265067fc9da4b%3A0xcd5741576fea320c!2sChennai%20Central%20Railway%20Station!5e0!3m2!1sen!2sin!4v1716371869867!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="lg:w-[500px] lg:h-[550px] w-[320px] h-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default FormMap;
