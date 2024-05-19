import logo from "../../public/Assets/logo.png";

function Header() {
  return (
    <header className="bg-white max-w-7xl m-auto outline-none p-4 rounded-full">
      <div className="flex justify-between items-center  text-center">
        <img src={logo} alt="" className="w-[80px] h-[80px] text-center"/>
        <ul className="flex items-center list-none gap-10 bg-white px-8 py-2 text-lg rounded-full">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About us</li>
          <li className="hover:underline">Rent</li>
          <li className="hover:underline">Listing</li>
          <li className="hover:underline">Buy</li>
          <li className="hover:underline">Sell</li>
        </ul>
        <div className="flex items-center border-2 border-gray-500 px-12 text-lg py-4 rounded-full">
          <button>Contact us</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
