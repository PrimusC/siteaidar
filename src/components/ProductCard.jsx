import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square bg-[#f9fafb] flex items-center justify-center p-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="mb-1">
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#1fc27c] bg-[#1fc27c]/10 px-2 py-0.5 rounded">
            {product.brand}
          </span>
        </div>

        <h3 className="text-sm font-bold text-[#1e293b] mb-1 leading-tight">
          {product.name}
        </h3>

        <p className="text-xs text-[#64748b] mb-3">{product.volume}</p>

        <div className="flex items-baseline gap-3 mb-3">
          <div>
            <p className="text-[10px] text-[#64748b] uppercase">Розница</p>
            <p className="text-base font-bold text-[#1e293b]">{product.retailPrice} ₽</p>
          </div>
          <div>
            <p className="text-[10px] text-[#64748b] uppercase">Партнёр</p>
            <p className="text-base font-bold text-[#f00069]">
              {product.partnerPrice} ₽
              <span className="text-[10px] text-[#64748b] ml-1">/ {product.pv}pv</span>
            </p>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-[#1fc27c] font-medium hover:text-[#1c6802] transition-colors w-full"
        >
          {expanded ? 'Скрыть' : 'Подробнее'}
          {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>

        {expanded && (
          <p className="mt-2 text-xs text-[#334155] leading-relaxed animate-fadeIn">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
}
