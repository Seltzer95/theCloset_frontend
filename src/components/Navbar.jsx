import { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold">The Closet</h1>
          </div>

          <form onSubmit={handleSearch} className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 hover:bg-purple-700 text-white px-4 py-1 rounded-md transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
