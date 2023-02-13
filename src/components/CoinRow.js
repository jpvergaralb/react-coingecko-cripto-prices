function CoinRow({ coin }) {
  return (
    <tr className="border border-slate-500 bg-gh-softer-blue">
      <td className="text-center text-sm">
        {" "}
        <code> {coin.market_cap_rank} </code>{" "}
      </td>
      <td className="flex justify-start">
        {" "}
        <img
          src={coin.image}
          alt={coin.name}
          width={24}
          className="m-2 object-contain"
        />{" "}
        <code className="ml-2 mt-2"> {coin.name} </code>{" "}
        <h3 className="ml-2 mt-2.5 text-sm font-extrabold uppercase text-slate-500">
          {" "}
          {coin.symbol}{" "}
        </h3>{" "}
      </td>
      <td className="text-center ">
        {" "}
        <code> ${coin.current_price} </code>
      </td>
      <td className="text-center">
        {" "}
        <code> ${coin.total_volume} </code>
      </td>
      <td
        className={`text-center ${
          coin.price_change_percentage_24h < 0
            ? "text-red-500"
            : "text-green-400"
        }`}
      >
        {" "}
        <code> ${coin.price_change_percentage_24h}</code>
      </td>
    </tr>
  );
}

export default CoinRow;
