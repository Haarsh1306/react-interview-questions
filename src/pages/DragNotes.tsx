import { AppBar } from "../components/AppBar";

export const DragNotes = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <AppBar />
      <h1 className="text-gray-300 font-bold text-3xl text-center mt-10">
        Drag notes
      </h1>
      <div className="flex justify-center items-center flex-col bg-gray-900  mt-10">
        <div className="flex gap-2">
          <input
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-white border border-gray-600 rounded-lg bg-gray-700 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Add note"
          />
          <button
            type="button"
            className="text-white end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
