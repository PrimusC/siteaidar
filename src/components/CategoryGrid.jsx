import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { categories } from '../data/categories';

export default function CategoryGrid() {
  return (
    <section className="bg-[#f9fafb] py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#1e293b] mb-10">
          КАТАЛОГ ПРОДУКЦИИ
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat) => {
            const Icon = Icons[cat.iconName] || Icons.Package;
            return (
              <Link
                key={cat.id}
                to={`/category/${cat.slug}`}
                className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl active:scale-95 border border-transparent hover:border-[#1fc27c]/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1fc27c]/10 text-[#1fc27c] transition-colors group-hover:bg-[#1fc27c] group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-center text-xs sm:text-sm font-semibold text-[#334155] leading-tight">
                  {cat.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
