import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductList from '../components/ProductList';
import { categories } from '../data/categories';
import { productsByCategory } from '../data/products';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center">
        <p className="text-lg text-[#64748b]">Категория не найдена</p>
      </div>
    );
  }

  const products = productsByCategory[slug] || [];

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero banner */}
      <div className="relative min-h-[200px] flex items-center justify-center bg-[#0f0e17]">
        <div className="relative z-10 text-center px-4 py-10">
          <h1 className="text-[#7add6f] text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            {category.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Продукция', to: '/catalog' },
            { label: category.title },
          ]}
        />

        <ProductList
          products={products}
          subcategories={category.subcategories}
        />
      </div>
    </div>
  );
}
