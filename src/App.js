import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TableCoins from "./components/TableCoins";
import InputSearch from "./components/InputSearch";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await response.data;
    setCoins(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen bg-gh-blue text-slate-200 overflow-y-auto">
      <Navbar />
      <InputSearch setSearch={setSearch}/>
      <TableCoins coins={coins} search={search}/>
    </div>
  );
}

export default App;
