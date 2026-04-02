import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center gap-1 text-xs text-[#64748b] mb-6 flex-wrap">
      <Link to="/" className="hover:text-[#1fc27c] transition-colors">
        Главная
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3" />
          {item.to ? (
            <Link to={item.to} className="hover:text-[#1fc27c] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1e293b] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
