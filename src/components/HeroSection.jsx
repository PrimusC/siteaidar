import { client } from '../data/config';
import ContactButtons from './ContactButtons';

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0e17] via-[#142218] to-[#0f0e17]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(31,194,124,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(122,221,111,0.1),transparent_60%)]" />

      <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-[#7add6f] text-3xl sm:text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wide">
          МЛМ КОМПАНИЯ НОВОГО ФОРМАТА
        </h1>

        <div className="mb-6">
          <p className="text-[#7add6f]/80 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold mb-1">
            {client.role}
          </p>
          <p className="text-white text-xl sm:text-2xl font-semibold">
            {client.name}
          </p>
          {client.city && (
            <p className="text-white/60 text-sm mt-1">
              {client.region ? `${client.region}, ` : ''}г. {client.city}
            </p>
          )}
        </div>

        <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {client.welcomeText}
        </p>

        <ContactButtons variant="hero" />
      </div>
    </section>
  );
}
