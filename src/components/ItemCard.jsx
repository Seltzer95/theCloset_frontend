const ItemCard = ({ item }) => {
  const imageUrl = item.images && item.images.length > 0 ? item.images[0] : null;

  return (
    <div className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Overlay Badges */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
          {item.verified && (
            <div className="bg-white/95 backdrop-blur-sm text-indigo-600 text-xs px-2 py-1 rounded-md font-semibold shadow-md flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Verified
            </div>
          )}
          <button className="ml-auto bg-white/95 backdrop-blur-sm p-1.5 rounded-full shadow-md hover:bg-white transition-colors">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Condition Badge */}
        <div className="absolute bottom-2 left-2">
          <span className={`text-xs px-2 py-1 rounded-md font-semibold backdrop-blur-sm ${
            item.condition === 'Like New' ? 'bg-emerald-500/90 text-white' :
            item.condition === 'Excellent' ? 'bg-blue-500/90 text-white' :
            'bg-amber-500/90 text-white'
          }`}>
            {item.condition}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Header */}
        <div className="mb-2">
          <div className="flex items-start justify-between gap-2 mb-0.5">
            <h3 className="text-sm font-semibold text-gray-900 line-clamp-1 flex-1">{item.name}</h3>
            <span className="text-sm font-bold text-gray-900 whitespace-nowrap">${item.price}</span>
          </div>
          {item.brand && (
            <p className="text-xs text-gray-600">{item.brand}</p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-2">
          <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-medium">
            {item.category}
          </span>
          <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded font-medium">
            Size {item.size}
          </span>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg text-sm font-medium transition-all duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
