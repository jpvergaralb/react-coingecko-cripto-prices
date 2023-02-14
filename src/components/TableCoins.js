import CoinRow from "./CoinRow";

function TableCoins({ coins, search }) {
  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="mt-1 p-2 text-xs md:text-sm lg:text-base">
      <table className="mx-auto min-w-[70%] table-auto border border-slate-500 max-w-[80%]">
        <thead>
          <tr className="border border-slate-500 ">
            <th >#</th>
            <th>Name</th>
            <th>
              Price (<code>USD</code>)
            </th>
            <th>Volume</th>
            <th>Price Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins.map((coin, index) => {
            return <CoinRow coin={coin} index={index} key={index + 1} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableCoins;
