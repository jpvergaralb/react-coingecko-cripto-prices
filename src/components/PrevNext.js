function PrevNext({ quantity, currentPage, setCurrentPage }) {
  return (
    <div className="mt-4 mb-2 flex items-center justify-around">
      <button
        className={`rounded-md bg-gh-softer-blue pl-2 pr-2`}
        disabled={currentPage === 1 ? "disabled" : ""}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {" "}
        Previous{" "}
      </button>
      <button
        className="rounded-md bg-gh-softer-blue pl-2 pr-2 "
        disabled={quantity < 98}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
}

export default PrevNext;
