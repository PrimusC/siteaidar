import { Crown, Gem, Award, Medal, Star, Shield } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactButtons from '../components/ContactButtons';
import { partnerLevels, partnerInfo } from '../data/partner';

const levelIcons = [Shield, Medal, Award, Star, Gem, Crown];

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Hero banner */}
      <div
        className="relative min-h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://prais-catalog.famall-obs.ru/wp-content/uploads/2024/11/13hhv5vjq8yyqnv43jck2adeqoq659tf.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0f0e17]/70" />
        <div className="relative z-10 text-center px-4 py-12">
          <h1 className="text-[#7add6f] text-3xl sm:text-4xl font-bold uppercase tracking-wide mb-4">
            СТАТЬ ПАРТНЁРОМ
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            {partnerInfo.heading}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Breadcrumbs items={[{ label: 'Стать партнёром' }]} />

        {/* Steps */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-[#1e293b] mb-6">
            Как стать партнёром?
          </h2>
          <div className="space-y-4 mb-6">
            {partnerInfo.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1fc27c] text-white text-sm font-bold">
                  {idx + 1}
                </div>
                <p className="text-[#334155] text-sm sm:text-base pt-1">
                  {step}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[#1fc27c]/10 rounded-xl p-4">
            <p className="text-sm text-[#1c6802] leading-relaxed">
              {partnerInfo.note}
            </p>
          </div>
        </div>

        {/* Partner levels */}
        <h2 className="text-xl font-bold text-[#1e293b] mb-6 text-center">
          УРОВНИ ПАРТНЁРСТВА
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {partnerLevels.map((level, idx) => {
            const Icon = levelIcons[idx] || Shield;
            return (
              <div
                key={level.id}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div
                  className="flex h-16 w-16 mx-auto mb-4 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${level.color}20` }}
                >
                  <Icon
                    className="h-8 w-8"
                    style={{ color: level.color }}
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1e293b] mb-1">
                  {level.name}
                </h3>
                <p className="text-2xl font-bold text-[#f00069] mb-1">
                  {level.pv} PV
                </p>
                {level.cost && (
                  <p className="text-sm text-[#64748b] mb-3">
                    от {level.cost.toLocaleString('ru-RU')} ₽
                  </p>
                )}
                <p className="text-xs text-[#334155] leading-relaxed">
                  {level.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-[#0f0e17] rounded-2xl p-8 text-center">
          <h2 className="text-[#7add6f] text-xl font-bold mb-4">
            {partnerInfo.ctaText}
          </h2>
          <div className="max-w-md mx-auto">
            <ContactButtons variant="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
