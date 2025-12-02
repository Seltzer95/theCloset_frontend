import { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-5xl mr-3">👗</div>
            <h1 className="text-white text-3xl font-extrabold tracking-tight">The Closet</h1>
          </div>

          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for clothing, shoes, accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-28 rounded-xl bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/40 transition-all shadow-lg text-gray-800 placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-5 py-2 rounded-lg transition-all font-semibold shadow-md"
              >
                Search
              </button>
            </div>
          </form>

          <div className="flex items-center gap-4">
            <button className="text-white hover:text-purple-100 transition-colors text-2xl">
              ❤️
            </button>
            <button className="text-white hover:text-purple-100 transition-colors text-2xl">
              👤
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
