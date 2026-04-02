import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { siteInfo } from '../data/config';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Продукция' },
  { to: '/partner', label: 'Стать партнёром' },
  { to: '/business-packs', label: 'Бизнес-пакеты' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-[#0f0e17] shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={siteInfo.logoUrl}
            alt="Логотип"
            className="h-7 w-auto object-contain"
          />
          <span className="hidden sm:block text-[#7add6f] text-xs font-bold uppercase tracking-wide leading-tight max-w-[320px]">
            {siteInfo.companyName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-[#1fc27c]/20 text-[#7add6f]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          aria-label="Меню"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-[#0f0e17] px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-[#1fc27c]/20 text-[#7add6f]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
