import { MessageCircle, Phone, Send } from 'lucide-react';
import { client } from '../data/config';

export default function HeroProfile() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-10 text-center sm:py-14">
      <div className="mx-auto max-w-xl">
        <img
          src={client.avatarUrl}
          alt={client.name}
          className="mx-auto mb-5 h-32 w-32 rounded-full border-4 border-emerald-200 object-cover shadow-lg sm:h-40 sm:w-40"
        />

        <h2 className="mb-1 text-2xl font-bold text-emerald-900 sm:text-3xl">
          {client.name}
        </h2>
        <p className="mb-4 text-sm font-medium text-emerald-600">
          г. {client.city}
        </p>

        <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
          {client.welcomeText}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`https://wa.me/${client.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-green-600 hover:shadow-lg active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            Написать в WhatsApp
          </a>

          <a
            href={`https://t.me/${client.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-sky-600 hover:shadow-lg active:scale-95"
          >
            <Send className="h-5 w-5" />
            Написать в Telegram
          </a>

          <a
            href={`tel:${client.phone.replace(/\D/g, '')}`}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg active:scale-95"
          >
            <Phone className="h-5 w-5" />
            Позвонить
          </a>
        </div>
      </div>
    </section>
  );
}
