import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { SERVICES, CONTACT_INFO, DOCUMENTS } from '@/lib/constants';
import { MessageCircle, Stethoscope, Package, Activity, Flower2, Pill, FileText, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={40} />,
  Package: <Package size={40} />,
  Activity: <Activity size={40} />,
  Flower2: <Flower2 size={40} />,
  Pill: <Pill size={40} />,
};

export default function Services() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--secondary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            Servi<span className="text-primary">ços</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Soluções nutricionais completas e personalizadas para cada objetivo de vida.
          </p>
        </div>
      </section>

      {/* Report Section - High Visibility */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container">
          <div className="max-w-4xl mx-auto p-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-[3rem] shadow-2xl animate-gradient-text">
            <div className="bg-card rounded-[2.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              <div className="p-6 bg-primary/10 rounded-[2rem] text-primary">
                <FileText size={60} />
              </div>
              <div className="flex-1 text-center md:text-left space-y-4">
                <h2 className="text-3xl font-black tracking-tighter">Relatório de Metodologia</h2>
                <p className="text-muted-foreground font-medium">
                  Baixe nosso guia completo sobre como funciona o acompanhamento nutricional e o que esperar da sua jornada.
                </p>
                <a
                  href={DOCUMENTS.relatorioServicos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                  Ver PDF Completo
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group p-10 bg-card border border-border rounded-[2.5rem] hover-glow transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {ICON_MAP[service.icon as keyof typeof ICON_MAP]}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground font-medium mb-8 flex-1 leading-relaxed">{service.description}</p>
                <button
                  onClick={() => handleWhatsApp(service.message)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-muted hover:bg-primary hover:text-white text-foreground rounded-2xl transition-all duration-300 font-bold"
                >
                  <MessageCircle size={20} />
                  Consultar Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-muted/30">
        <div className="container text-center max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Por que escolher meu acompanhamento?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { t: 'Personalização Real', d: 'Nada de dietas de gaveta. Tudo é feito do zero para você.' },
              { t: 'Suporte Contínuo', d: 'Dúvidas pelo WhatsApp e ajustes sempre que necessário.' },
              { t: 'Tecnologia', d: 'Bioimpedância de última geração e aplicativos de suporte.' },
              { t: 'Resultados', d: 'Foco na saúde sustentável e mudança de hábitos definitiva.' },
            ].map((item, i) => (
              <div key={i} className="p-8 bg-card rounded-3xl border border-border text-left hover-lift">
                <h4 className="text-xl font-black text-primary mb-2">{item.t}</h4>
                <p className="text-muted-foreground font-medium">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Dúvidas sobre qual serviço escolher?</h2>
          <p className="text-xl text-muted-foreground font-medium">Entre em contato para uma breve conversa e identificaremos o melhor caminho para você.</p>
          <button
            onClick={() => handleWhatsApp('Olá! Gostaria de uma orientação sobre qual serviço seria ideal para o meu caso.')}
            className="px-12 py-6 bg-primary text-white rounded-2xl font-black text-xl hover:scale-110 transition-all shadow-2xl active:scale-95"
          >
            Falar com Susi
          </button>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
