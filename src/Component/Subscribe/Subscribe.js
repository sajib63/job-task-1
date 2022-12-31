import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-16 md:flex justify-between p-4">
      <div>
        <h1 className="text-3xl font-bold  text-[#30FBEF]">Subscribe !</h1>
        <p className="mt-3 text-white">
          Join our newsletter to never miss any latest news.
        </p>
      </div>
      <div>
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only "
          >
            Search
          </label>
          <div class="relative">
            <input
              type="search"
              id="default-search"
              class="block  px-4 py-2  text-sm   rounded-l-full rounded-r-full  bg-[#4e4e4e]   md:w-[350px]"
              placeholder="Enter Your Email Address Here"
              required
            />
            <button
              type="submit"
              class="text-white absolute right-1.5 bottom-0.5 bg-[#282828] hover:bg-[#282828]focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Join Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
