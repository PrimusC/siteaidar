import { client } from '../data/config';
import ContactButtons from './ContactButtons';

export default function HeroProfile() {
  return (
    <section className="relative overflow-hidden bg-[#0f0e17] px-4 py-14 text-center sm:py-20">
      {/* Greenleaf logo watermark */}
      <img
        src="https://greenleaf-global.com/static/img/logo_white.svg"
        alt="Greenleaf"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-auto -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-xl">
        {/* Company heading */}
        <h1 className="mb-8 text-2xl font-bold uppercase tracking-wide text-[#7add6f] sm:text-4xl">
          МЛМ КОМПАНИЯ НОВОГО ФОРМАТА
        </h1>

        {/* Role */}
        <p className="mb-1 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-[#7add6f]/80">
          {client.role}
        </p>

        {/* Name & city */}
        <h2 className="mb-1 text-2xl font-bold text-white sm:text-3xl">
          {client.name}
        </h2>
        <p className="mb-4 text-sm font-medium text-white/60">
          {client.region ? `${client.region}, ` : ''}г. {client.city}
        </p>

        {/* Welcome text */}
        <p className="mb-8 text-base leading-relaxed text-white/80 sm:text-lg">
          {client.welcomeText}
        </p>

        {/* Contact buttons */}
        <ContactButtons variant="hero" />
      </div>
    </section>
  );
}
