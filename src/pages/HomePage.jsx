import HeroSection from '../components/HeroSection';
import CompanyInfo from '../components/CompanyInfo';
import CategoryGrid from '../components/CategoryGrid';
import BrandTabs from '../components/BrandTabs';
import ContactButtons from '../components/ContactButtons';
import { heroVideos } from '../data/config';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyInfo />
      <CategoryGrid />

      {/* Video section */}
      <section className="bg-[#0f0e17] py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-10">
            О КОМПАНИИ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroVideos.map((video, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden bg-black/30">
                <video
                  src={video.url}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video"
                  poster={`https://placehold.co/848x480/0f0e17/7add6f?text=${encodeURIComponent(video.title)}`}
                />
                <p className="text-white/80 text-sm text-center py-3 px-4">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandTabs />

      {/* Contact CTA */}
      <section className="bg-[#f9fafb] py-12 px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-[#1e293b] mb-4">
            СВЯЖИТЕСЬ СО МНОЙ
          </h2>
          <p className="text-[#334155] mb-8 text-sm">
            Готовы сделать заказ или узнать подробности? Напишите мне удобным способом!
          </p>
          <ContactButtons />
        </div>
      </section>
    </>
  );
}
