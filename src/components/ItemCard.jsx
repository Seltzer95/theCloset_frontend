const ItemCard = ({ item }) => {
  const imageUrl = item.images && item.images.length > 0 ? item.images[0] : null;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative h-72 bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-gray-300 text-7xl">
            👕
          </div>
        )}
        {item.verified && (
          <div className="absolute top-3 right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md flex items-center gap-1">
            <span>✓</span> Verified
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 flex-1">{item.name}</h3>
          <span className="text-2xl font-bold text-purple-600 ml-2">${item.price}</span>
        </div>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="inline-block bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 text-xs px-3 py-1.5 rounded-full font-semibold">
            {item.category}
          </span>
          <span className="inline-block bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 text-xs px-3 py-1.5 rounded-full font-semibold">
            Size {item.size}
          </span>
          <span className="inline-block bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs px-3 py-1.5 rounded-full font-semibold">
            {item.condition}
          </span>
        </div>

        {item.brand && (
          <p className="text-gray-700 text-sm mb-2 font-medium">
            <span className="text-gray-500">Brand:</span> {item.brand}
          </p>
        )}

        {item.seller && (
          <p className="text-gray-700 text-sm mb-3 font-medium">
            <span className="text-gray-500">Seller:</span> {item.seller}
          </p>
        )}

        {item.description && (
          <p className="text-gray-600 text-sm mt-3 line-clamp-3 leading-relaxed">
            {item.description}
          </p>
        )}

        <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
