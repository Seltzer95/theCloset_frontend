const ItemCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-6xl">
            👕
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>

        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold">
            {item.category}
          </span>
          <span className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full font-semibold">
            {item.size}
          </span>
        </div>

        {item.brand && (
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Brand:</span> {item.brand}
          </p>
        )}

        {item.color && (
          <p className="text-gray-600 text-sm mb-2">
            <span className="font-semibold">Color:</span> {item.color}
          </p>
        )}

        {item.description && (
          <p className="text-gray-600 text-sm mt-3 line-clamp-2">
            {item.description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className={`text-sm font-semibold ${item.available ? 'text-green-600' : 'text-red-600'}`}>
            {item.available ? '✓ Available' : '✗ Not Available'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
