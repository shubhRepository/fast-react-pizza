import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/order/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-28 rounded-full bg-yellow-200 px-4 py-2 duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50 focus:ring-offset-1 focus:transition-all sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
