import { MessageCircle, Phone, Send } from 'lucide-react';
import { client, companyInfo } from '../data/config';
import ContactButtons from './ContactButtons';

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${client.avatarUrl})`,
        }}
      />
      <div className="absolute inset-0 bg-[#0f0e17]/70" />

      <div className="relative z-10 text-center px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-[#7add6f] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
          МЛМ КОМПАНИЯ НОВОГО ФОРМАТА
        </h1>
        <p className="text-white/90 text-lg sm:text-xl mb-2">
          {client.name}
        </p>
        {client.city && (
          <p className="text-white/60 text-sm mb-8">
            {client.region ? `${client.region}, ` : ''}г. {client.city}
          </p>
        )}
        <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {client.welcomeText}
        </p>

        <ContactButtons variant="hero" />
      </div>
    </section>
  );
}
