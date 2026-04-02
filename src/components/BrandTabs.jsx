import { useState } from 'react';
import { brands } from '../data/brands';

export default function BrandTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#1e293b] mb-4">
          НАШИ БРЕНДЫ
        </h2>
        <p className="text-center text-[#334155] mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Компания предлагает широкому кругу потребителей несколько направлений
          экологически чистой продукции по демократичным ценам.
        </p>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {brands.map((brand, idx) => (
            <button
              key={brand.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border ${
                activeTab === idx
                  ? 'bg-[#1c6802] text-white border-[#1c6802] shadow-md'
                  : 'bg-white text-[#334155] border-[#e2e8f0] hover:border-[#1c6802] hover:text-[#1c6802]'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* Active tab content */}
        <div className="bg-[#f9fafb] rounded-2xl p-6 sm:p-8 shadow-inner transition-all">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="shrink-0">
              <img
                src={brands[activeTab].logoUrl}
                alt={brands[activeTab].name}
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3">
                {brands[activeTab].name}
              </h3>
              <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
                {brands[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
