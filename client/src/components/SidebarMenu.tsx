import { useLocation } from 'wouter';
import { useState } from 'react';
import { Moon, Sun, MessageCircle, ChevronDown, Home, User, Utensils, Pill, Briefcase, Mail } from 'lucide-react';
import { useTheme } from '@/_core/hooks/useTheme';
import { NUTRITION_SUBMENU, CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

const NAVIGATION_ITEMS = [
  { label: 'Início', href: '/', icon: Home },
  { label: 'Sobre Mim', href: '/about', icon: User },
  { label: 'Nutrição', href: '#', icon: Utensils, hasSubmenu: true },
  { label: 'Mounjaro', href: '/mounjaro', icon: Pill },
  { label: 'Serviços', href: '/services', icon: Briefcase },
  { label: 'Contato', href: '/contact', icon: Mail },
];

export default function SidebarMenu() {
  const [location] = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGES.floatingButton);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`;
    window.open(url, '_blank');
  };

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    return location.startsWith(href);
  };

  return (
    <aside
      className="fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 z-40 flex flex-col"
      style={{ width: isExpanded ? '16rem' : '5rem' }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setIsNutritionOpen(false);
      }}
    >
      {/* Logo */}
      <div className="p-4 border-b border-border flex items-center justify-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          SF
        </div>
        {isExpanded && (
          <div className="ml-3 flex-1 min-w-0">
            <p className="text-sm font-bold text-foreground truncate">Susi Farias</p>
            <p className="text-xs text-muted-foreground truncate">Nutricionista</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = item.icon;
          const isNutrition = item.hasSubmenu;

          return (
            <div key={item.label}>
              {isNutrition ? (
                <button
                  onClick={() => setIsNutritionOpen(!isNutritionOpen)}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-colors duration-200 ${
                    isActive('/nutrition')
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {isExpanded && (
                    <>
                      <span className="text-sm font-medium flex-1 text-left">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 flex-shrink-0 ${
                          isNutritionOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </>
                  )}
                </button>
              ) : (
                <a
                  href={item.href}
                  className={`w-full px-4 py-3 flex items-center gap-3 transition-colors duration-200 block ${
                    isActive(item.href)
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {isExpanded && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </a>
              )}

              {/* Nutrition Submenu */}
              {isNutrition && isNutritionOpen && isExpanded && (
                <div className="bg-background/50 border-l-2 border-primary ml-4">
                  {NUTRITION_SUBMENU.map((subitem) => (
                    <a
                      key={subitem.label}
                      href={subitem.href}
                      className={`w-full px-6 py-2 text-sm flex items-center gap-2 transition-colors duration-200 block ${
                        isActive(subitem.href)
                          ? 'bg-secondary/20 text-secondary'
                          : 'text-muted-foreground hover:bg-secondary/10'
                      }`}
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full flex-shrink-0" />
                      {subitem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="border-t border-border p-3 space-y-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
          title={`Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
        >
          {theme === 'dark' ? (
            <>
              <Sun size={18} className="text-yellow-500 flex-shrink-0" />
              {isExpanded && <span className="text-xs font-medium">Claro</span>}
            </>
          ) : (
            <>
              <Moon size={18} className="text-blue-600 flex-shrink-0" />
              {isExpanded && <span className="text-xs font-medium">Escuro</span>}
            </>
          )}
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors duration-200"
          title="Enviar mensagem WhatsApp"
        >
          <MessageCircle size={18} className="text-green-500 flex-shrink-0" />
          {isExpanded && <span className="text-xs font-medium">WhatsApp</span>}
        </button>
      </div>
    </aside>
  );
}
