import { MessageCircle, Phone, MessageSquare } from 'lucide-react';
import { client } from '../data/config';

export default function ContactButtons({ variant = 'default' }) {
  const isHero = variant === 'hero';

  const baseClass = isHero
    ? 'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[9px] px-6 py-3 text-sm font-semibold transition-all active:scale-95'
    : 'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all active:scale-95 w-full sm:w-auto';

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${isHero ? 'justify-center' : ''}`}>
      <a
        href={`https://wa.me/${client.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${
          isHero
            ? 'border-2 border-[#25d366] text-[#25d366] bg-transparent hover:bg-[#25d366] hover:text-white'
            : 'bg-[#25d366] text-white shadow-md hover:bg-[#20bd5a] hover:shadow-lg'
        }`}
      >
        <MessageCircle className="h-5 w-5" />
        Написать в WhatsApp
      </a>

      <a
        href={client.max}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} ${
          isHero
            ? 'border-2 border-[#7c3aed] text-[#7c3aed] bg-transparent hover:bg-[#7c3aed] hover:text-white'
            : 'bg-[#7c3aed] text-white shadow-md hover:bg-[#6d28d9] hover:shadow-lg'
        }`}
      >
        <MessageSquare className="h-5 w-5" />
        Написать в MAX
      </a>

      <a
        href={`tel:${client.phone.replace(/\D/g, '')}`}
        className={`${baseClass} ${
          isHero
            ? 'border-2 border-[#f00069] text-[#f00069] bg-transparent hover:bg-[#f00069] hover:text-white'
            : 'bg-[#f00069] text-white shadow-md hover:bg-[#d4005a] hover:shadow-lg'
        }`}
      >
        <Phone className="h-5 w-5" />
        Позвонить
      </a>
    </div>
  );
}
