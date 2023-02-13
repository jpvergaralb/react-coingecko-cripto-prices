import { BsCurrencyBitcoin } from "react-icons/bs";

function Navbar() {
  return (
    <div className="font-slate-200 fixed flex w-full items-center justify-center bg-black bg-opacity-30 p-1 text-center text-2xl shadow-md backdrop-blur-md">
      Crypto Prices <BsCurrencyBitcoin className="ml-2 text-yellow-500" />
    </div>
  );
}

export default Navbar;
