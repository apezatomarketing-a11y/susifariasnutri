import { useLocation } from 'wouter';
import { useState } from 'react';
import { Menu, X, Moon, Sun, MessageCircle } from 'lucide-react';
import { useTheme } from '@/_core/hooks/useTheme';
import { NAVIGATION_ITEMS, NUTRITION_SUBMENU, CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';

export default function SidebarMenu() {
  const [location, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isNutritionOpen, setIsNutritionOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavigation = (href: string) => {
    if (href !== '#') {
      navigate(href);
      setIsOpen(false);
    }
  };

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
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 bg-card rounded-lg border border-border"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-card border-r border-border backdrop-blur-xl z-40 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-12 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SF</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
        {NAVIGATION_ITEMS.map((item) => (
            <div key={item.label}>
              {'submenu' in item && item.submenu ? (
                  <>
                    <button
                      onClick={() => setIsNutritionOpen(!isNutritionOpen)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive('/nutrition')
                          ? 'bg-primary/20 text-primary'
                          : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span
                        className={`transition-transform duration-200 ${
                          isNutritionOpen ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {isNutritionOpen && (
                      <div className="ml-4 space-y-2 mt-2">
                        {NUTRITION_SUBMENU.map((subitem) => (
                          <button
                            key={subitem.label}
                            onClick={() => handleNavigation(subitem.href)}
                            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                              isActive(subitem.href)
                                ? 'bg-secondary/20 text-secondary'
                                : 'text-muted-foreground hover:text-foreground hover:bg-secondary/10'
                            }`}
                          >
                            {subitem.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary/20 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom Actions */}
          <div className="space-y-3 pt-6 border-t border-border">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200"
              title={`Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={18} />
                  <span className="text-sm font-medium">Modo Claro</span>
                </>
              ) : (
                <>
                  <Moon size={18} />
                  <span className="text-sm font-medium">Modo Escuro</span>
                </>
              )}
            </button>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-all duration-200"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Desktop Sidebar - Always Visible */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-card border-r border-border backdrop-blur-xl flex-col p-6 z-40">
        {/* Logo */}
        <div className="mb-12 flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
            <span className="text-white font-bold text-xl">SF</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">
          {NAVIGATION_ITEMS.map((item) => (
            <div key={item.label}>
              {'submenu' in item && item.submenu ? (
                <>
                  <button
                    onClick={() => setIsNutritionOpen(!isNutritionOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive('/nutrition')
                        ? 'bg-primary/20 text-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span
                      className={`transition-transform duration-200 ${
                        isNutritionOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {isNutritionOpen && (
                    <div className="ml-4 space-y-2 mt-2">
                      {NUTRITION_SUBMENU.map((subitem) => (
                        <button
                          key={subitem.label}
                          onClick={() => handleNavigation(subitem.href)}
                          className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                            isActive(subitem.href)
                              ? 'bg-secondary/20 text-secondary'
                              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/10'
                          }`}
                        >
                          {subitem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary/20 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="space-y-3 pt-6 border-t border-border">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200"
            title={`Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={18} />
                <span className="text-sm font-medium">Modo Claro</span>
              </>
            ) : (
              <>
                <Moon size={18} />
                <span className="text-sm font-medium">Modo Escuro</span>
              </>
            )}
          </button>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-secondary transition-all duration-200"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">WhatsApp</span>
          </button>
        </div>
      </aside>
    </>
  );
}
