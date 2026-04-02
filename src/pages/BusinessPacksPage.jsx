import { Star, Gem, Crown } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactButtons from '../components/ContactButtons';

const packs = [
  {
    name: 'ПЛАТИНА',
    pv: 275,
    icon: Star,
    color: '#e5e4e2',
    description: 'Комбинации наборов на сумму 275 баллов. Включает крем, одежду и аксессуары.',
    includes: [
      'Крем-пакет (275pv)',
      'Набор одежды',
      'Куртка (различные варианты)',
    ],
  },
  {
    name: 'БРИЛЛИАНТ',
    pv: 825,
    icon: Gem,
    color: '#b9f2ff',
    description: 'Любая комбинация всех типов стартовых наборов на общую сумму 825 баллов.',
    includes: [
      'Любые стартовые наборы',
      'Расширенный ассортимент',
      'Максимальные бонусы',
    ],
  },
  {
    name: 'КОРОНА',
    pv: 1650,
    icon: Crown,
    color: '#ff6b6b',
    description: 'Все комбинации наборов на общую сумму 1650 баллов. Высший бизнес-статус.',
    includes: [
      'Полный ассортимент наборов',
      'Высшие привилегии',
      'VIP-поддержка',
    ],
  },
];

export default function BusinessPacksPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero */}
      <div className="relative min-h-[250px] flex items-center justify-center bg-[#0f0e17]">
        <div className="relative z-10 text-center px-4 py-10">
          <h1 className="text-[#7add6f] text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-4">
            БИЗНЕС-ПАКЕТЫ
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            ЗАЙМИ СВОЁ БИЗНЕС МЕСТО В СИСТЕМЕ
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Breadcrumbs items={[{ label: 'Бизнес-пакеты' }]} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packs.map((pack) => (
            <div
              key={pack.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div
                className="p-8 text-center"
                style={{ backgroundColor: `${pack.color}15` }}
              >
                <pack.icon
                  className="h-16 w-16 mx-auto mb-4"
                  style={{ color: pack.color === '#e5e4e2' ? '#999' : pack.color }}
                />
                <h2 className="text-2xl font-bold text-[#1e293b]">
                  {pack.name}
                </h2>
                <p className="text-3xl font-bold text-[#f00069] mt-2">
                  {pack.pv} PV
                </p>
              </div>

              <div className="p-6">
                <p className="text-sm text-[#334155] mb-4 leading-relaxed">
                  {pack.description}
                </p>
                <ul className="space-y-2">
                  {pack.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-[#334155]"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#1fc27c] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#0f0e17] rounded-2xl p-8 text-center">
          <h2 className="text-[#7add6f] text-xl font-bold mb-2">
            ЗАПОЛНИ ЗАЯВКУ
          </h2>
          <p className="text-white/60 text-sm mb-6">
            Я отвечу в самое ближайшее время
          </p>
          <div className="max-w-md mx-auto">
            <ContactButtons variant="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
