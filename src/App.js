import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TableCoins from "./components/TableCoins";
import InputSearch from "./components/InputSearch";
import PrevNext from "./components/PrevNext";
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${currentPage}&sparkline=false`
    );
    const data = await response.data;
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  return (
    <div className="h-screen bg-gh-blue text-slate-200 overflow-y-auto flex flex-col">
      <Navbar />
      <InputSearch setSearch={setSearch}/>
      <PrevNext quantity={coins.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <TableCoins coins={coins} search={search}/>
      <PrevNext quantity={coins.length} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Footer />
    </div>
  );
}

export default App;
