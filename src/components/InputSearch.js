function InputSearch({setSearch}) {
  return (
    <div className="mt-16 flex items-center justify-center">
      <input
        className="rounded-md bg-gh-softer-blue p-1 shadow-md"
        type="text"
        placeholder="search a coin ..."
        onChange={(e) => setSearch(e.target.value)}
        defaultValue={''}
      />
    </div>
  );
}

export default InputSearch;
