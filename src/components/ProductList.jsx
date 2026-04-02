import { useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, subcategories }) {
  const [activeTab, setActiveTab] = useState(subcategories[0]?.anchor || '');

  const filtered = activeTab
    ? products.filter((p) => p.subcategory === activeTab)
    : products;

  return (
    <div>
      {/* Subcategory tabs */}
      {subcategories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {subcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveTab(sub.anchor)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all border ${
                activeTab === sub.anchor
                  ? 'bg-[#1fc27c] text-white border-[#1fc27c] shadow-sm'
                  : 'bg-white text-[#334155] border-[#e2e8f0] hover:border-[#1fc27c] hover:text-[#1fc27c]'
              }`}
            >
              {sub.title}
            </button>
          ))}
        </div>
      )}

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-[#64748b]">
          <p className="text-lg">Товары в данной категории скоро появятся</p>
        </div>
      )}
    </div>
  );
}
