import logo from "../../public/Assets/logo.png";

function Footer() {
  return (
    <div className="mt-44 max-w-7xl m-auto">
      <div className="flex justify-between items-center text-center">
        <div className="flex flex-col  items-center text-center mb-10 gap-4">
          <img src={logo} alt="" className="w-[150px] h-[150px]" />
          <h1 className="text-4xl font-bold">VAIKUNTAM REALITY MANAGEMENT</h1>
        </div>

        <div className="w-full flex justify-evenly">
          <div className=" flex flex-col gap-8">
            <h1 className="text-3xl">About</h1>
            <ul className="flex flex-col gap-8 text-2xl">
              <li>Company</li>
              <li>Contact Us</li>
              <li>Terms and Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-8">
            <h1 className="text-3xl">Product</h1>
            <ul className=" flex flex-col gap-8 text-2xl">
              <li>Categories</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-8">
            <h1 className="text-3xl">Discover</h1>
            <ul className=" flex flex-col gap-8 text-2xl">
              <li>Teams</li>
              <li>Partners</li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
