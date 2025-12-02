import { useState, useEffect } from 'react';
import { itemsAPI } from '../services/api';
import ItemCard from '../components/ItemCard';
import Navbar from '../components/Navbar';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await itemsAPI.getAllItems();
      setItems(data);
      setFilteredItems(data);
    } catch (err) {
      setError('Failed to load items. Please try again later.');
      console.error('Error fetching items:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setFilteredItems(items);
      return;
    }

    try {
      const data = await itemsAPI.searchItems(query);
      setFilteredItems(data);
    } catch (err) {
      console.error('Error searching items:', err);
      // Fallback to client-side search if API fails
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.brand && item.brand.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredItems(filtered);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onSearch={handleSearch} />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-indigo-600"></div>
            <p className="mt-6 text-gray-600 text-base">Loading curated items...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar onSearch={handleSearch} />
        <div className="flex items-center justify-center h-[calc(100vh-5rem)]">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-900 text-xl font-semibold mb-2">{error}</p>
            <p className="text-gray-500 mb-6">We couldn't load your items right now</p>
            <button
              onClick={fetchItems}
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSearch={handleSearch} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Discover Curated Fashion
              </h2>
              <p className="text-gray-600 text-lg">
                {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} available
              </p>
            </div>

            {/* Filter/Sort Options */}
            <div className="flex gap-3">
              <button className="px-4 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:border-gray-400 transition-colors flex items-center gap-2 bg-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>
              <button className="px-4 py-2.5 border border-gray-300 rounded-xl text-gray-700 hover:border-gray-400 transition-colors flex items-center gap-2 bg-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
                Sort
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button className="px-5 py-2 bg-gray-900 text-white rounded-full text-sm font-medium whitespace-nowrap">
              All Items
            </button>
            <button className="px-5 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
              Clothing
            </button>
            <button className="px-5 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
              Shoes
            </button>
            <button className="px-5 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
              Accessories
            </button>
            <button className="px-5 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
              Verified Only
            </button>
          </div>
        </div>

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-600">
            <p className="text-sm">&copy; 2024 The Closet. Curated fashion marketplace.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
