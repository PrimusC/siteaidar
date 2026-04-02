import { brands } from '../data/config';

export default function BrandList() {
  return (
    <section className="bg-emerald-50 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-2xl font-bold text-emerald-900 sm:text-3xl">
          Бренды компании
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg">
          Компания предлагает несколько направлений экологически чистой продукции
          по демократичным ценам. Каждый бренд — это проверенное качество и забота
          о вашем здоровье.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={brand.logoUrl}
                alt={brand.name}
                className="mb-4 h-16 object-contain"
              />
              <h3 className="mb-2 text-lg font-bold text-emerald-800">
                {brand.name}
              </h3>
              <p className="text-center text-sm leading-relaxed text-gray-600">
                {brand.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
