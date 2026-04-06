import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Send, Smartphone } from 'lucide-react';
import { client, siteInfo } from '../data/config';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0e17] px-4 py-10 text-gray-300">
      <div className="mx-auto max-w-7xl">
        {/* Logo & nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-white/10">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={siteInfo.logoUrl}
              alt="Логотип"
              className="h-6 w-auto object-contain"
            />
            <span className="text-[#7add6f] text-xs font-bold uppercase">
              {siteInfo.companyName}
            </span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-[#7add6f] transition-colors">Главная</Link>
            <Link to="/catalog" className="hover:text-[#7add6f] transition-colors">Продукция</Link>
            <Link to="/partner" className="hover:text-[#7add6f] transition-colors">Стать партнёром</Link>
          </nav>
        </div>

        {/* Contact links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={`https://wa.me/${client.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-[#25d366]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={`https://t.me/${client.telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-[#0088cc]"
          >
            <Send className="h-4 w-4" />
            Telegram
          </a>
          <a
            href={`https://max.im/${client.maxMessenger}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-[#7B68EE]"
          >
            <Smartphone className="h-4 w-4" />
            MAX
          </a>
          <a
            href={`tel:${client.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-[#f00069]"
          >
            <Phone className="h-4 w-4" />
            {client.phone}
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500">
          <p className="mb-1">
            &copy; {year} {siteInfo.companyName}. Все права защищены.
          </p>
          <a href="#" className="underline transition-colors hover:text-gray-300">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
