import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { categories } from '../data/categories';

export default function CatalogPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero banner */}
      <div
        className="relative min-h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://prais-catalog.famall-obs.ru/wp-content/uploads/2024/10/e97d89b19813d0bf617fb14e33cbab97-scaled.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0f0e17]/70" />
        <div className="relative z-10 text-center px-4 py-12">
          <h1 className="text-[#7add6f] text-3xl sm:text-4xl font-bold uppercase tracking-wide">
            ПРОДУКЦИЯ GREENLEAF
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Breadcrumbs items={[{ label: 'Продукция' }]} />

        <div className="space-y-3">
          {categories.map((cat) => {
            const Icon = Icons[cat.iconName] || Icons.Package;
            const isOpen = openId === cat.id;

            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-[#f9fafb] transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1fc27c]/10 text-[#1fc27c]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1 text-sm sm:text-base font-semibold text-[#1e293b]">
                    {cat.title}
                  </span>
                  {isOpen ? (
                    <ChevronDown className="h-5 w-5 text-[#64748b]" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-[#64748b]" />
                  )}
                </button>

                {isOpen && (
                  <div className="border-t border-[#e2e8f0] px-5 py-4 bg-[#f9fafb]">
                    <div className="space-y-1">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub.id}
                          to={`/category/${cat.slug}#${sub.anchor}`}
                          className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-[#334155] hover:bg-[#1fc27c]/10 hover:text-[#1c6802] transition-colors"
                        >
                          <ChevronRight className="h-3 w-3" />
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to={`/category/${cat.slug}`}
                      className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-[#1fc27c] hover:text-[#1c6802] transition-colors"
                    >
                      Смотреть все товары
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
