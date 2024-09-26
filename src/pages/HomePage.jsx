import React from 'react';

export const HomePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Search and Filter Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg shadow-md p-4 mb-8 space-y-4 lg:space-y-0">
        {/* Search Bar */}
        <div className="w-full lg:w-1/3 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Mockups, Logos..."
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary">Search</button>
        </div>

        {/* Dropdowns */}
        <div className="w-full lg:w-2/3 flex flex-wrap items-center justify-evenly gap-4">
          <select className="select select-bordered w-full lg:w-auto">
            <option>My Favourite Knowledges</option>
          </select>
          <select className="select select-bordered w-full lg:w-auto">
            <option>Saved Searches</option>
          </select>
          <select className="select select-bordered w-full lg:w-auto">
            <option>Whats New</option>
          </select>
          <select className="select select-bordered w-full lg:w-auto">
            <option>My Favourite Products</option>
          </select>
        </div>

        {/* Filter and Voice Search Buttons */}
        <div className="flex space-x-2">
          <button className="btn btn-secondary">Filter</button>
          <button className="btn btn-accent">Voice Search</button>
        </div>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card shadow-lg bg-white rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Card 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Powering innovation & trust at 200,000+ companies worldwide
            </h2>
            <p className="text-gray-600 mt-2">
              Empower Developers, IT Ops, and business teams to collaborate at high velocity.
              Respond to changes and deliver great customer and employee service experiences fast.
            </p>
            <button className="btn btn-link text-blue-500 mt-4">Learn more</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card shadow-lg bg-white rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Card 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Noteworthy technology acquisitions 2021
            </h2>
            <p className="text-gray-600 mt-2">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className="btn btn-link text-blue-500 mt-4">Read more</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card shadow-lg bg-white rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x200"
            alt="Card 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">
              Test document (20126_draft)
            </h2>
            <p className="text-gray-600 mt-2">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className="btn btn-link text-blue-500 mt-4">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
