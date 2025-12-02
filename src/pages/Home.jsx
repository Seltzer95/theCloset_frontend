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
      <div className="min-h-screen bg-gray-50">
        <Navbar onSearch={handleSearch} />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
            <p className="mt-4 text-gray-600 text-lg">Loading your closet...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar onSearch={handleSearch} />
        <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <p className="text-gray-800 text-xl font-semibold">{error}</p>
            <button
              onClick={fetchItems}
              className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={handleSearch} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Your Virtual Closet
          </h2>
          <p className="text-gray-600">
            {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} available
          </p>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-xl">No items found</p>
            <p className="text-gray-500 mt-2">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
