import React, { useMemo, useState } from "react";
import { AppBar } from "../components/AppBar";

const list = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
  { id: 6, name: "Fig" },
  { id: 7, name: "Grape" },
  { id: 8, name: "Honeydew" },
  { id: 9, name: "Indian Fig" },
  { id: 10, name: "Jackfruit" },
];
export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = useMemo(() => {
    return list.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    
    <div>
      <AppBar/>
      <div className="flex justify-center flex-col bg-gray-900 h-screen">
      
        <form className="mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="min-w-96 relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              onChange={handleSearch}
              className="block w-full p-4 ps-10 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
            <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2">
              Search
            </button>
          </div>
        </form>
        <div className="mx-auto mt-10">
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {filteredList.length > 0 ? (
              filteredList.map((item) => (
                <div key={item.id}>
                  <li className="w-full px-4 py-2 rounded-b-lg">{item.name}</li>
                  <hr />
                </div>
              ))
            ) : (
              <li className="w-full px-4 py-2 text-center text-gray-500">
                No items found
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
