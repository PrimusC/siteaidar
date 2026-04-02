import { Target, Heart, Shield, Users } from 'lucide-react';
import { companyInfo } from '../data/config';

const items = [
  {
    icon: Target,
    title: 'СТРАТЕГИЯ',
    text: companyInfo.strategy,
    color: '#cf2e2e',
  },
  {
    icon: Heart,
    title: 'МИССИЯ',
    text: companyInfo.mission,
    color: '#cf2e2e',
  },
  {
    icon: Shield,
    title: 'ЦЕННОСТИ',
    text: companyInfo.values,
    color: '#cf2e2e',
  },
  {
    icon: Users,
    title: 'ПРОГРАММА',
    text: companyInfo.program,
    color: '#cf2e2e',
  },
];

export default function CompanyInfo() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.title} className="text-center p-6">
            <item.icon className="h-10 w-10 mx-auto mb-4 text-[#1fc27c]" />
            <h3
              className="text-sm font-bold uppercase tracking-wider mb-3"
              style={{ color: item.color }}
            >
              {item.title}
            </h3>
            <p className="text-[#334155] text-sm leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
