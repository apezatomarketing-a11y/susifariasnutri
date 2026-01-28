import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { SERVICES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle, Stethoscope, Package, Activity, Flower2, Pill } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={32} />,
  Package: <Package size={32} />,
  Activity: <Activity size={32} />,
  Flower2: <Flower2 size={32} />,
  Pill: <Pill size={32} />,
};

export default function Services() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const serviceDetails = {
    'consulta-avulsa': {
      title: 'Consulta Avulsa',
      description: 'Consulta individualizada com análise completa de seu histórico nutricional',
      details: [
        'Avaliação de hábitos alimentares',
        'Análise de exames bioquímicos',
        'Prescrição de plano alimentar',
        'Orientações personalizadas',
        'Duração: 60 minutos',
      ],
      price: 'A combinar',
    },
    'pacotes': {
      title: 'Pacotes',
      description: 'Programas personalizados com acompanhamento contínuo',
      details: [
        'Pacote 3 meses',
        'Pacote 6 meses',
        'Pacote 12 meses',
        'Acompanhamento mensal',
        'Suporte via WhatsApp',
      ],
      price: 'A combinar',
    },
    'bioimpedancia': {
      title: 'Bioimpedância',
      description: 'Avaliação de composição corporal com relatório detalhado',
      details: [
        'Medição de gordura corporal',
        'Massa muscular',
        'Água corporal',
        'Taxa metabólica basal',
        'Relatório visual e impresso',
      ],
      price: 'A combinar',
    },
    'florais': {
      title: 'Florais de Minas',
      description: 'Complementação natural para seu tratamento nutricional',
      details: [
        'Seleção personalizada',
        'Indicação de florais',
        'Orientação de uso',
        'Acompanhamento de resultados',
        'Produtos de qualidade',
      ],
      price: 'A combinar',
    },
    'suplementacao': {
      title: 'Suplementação',
      description: 'Recomendações personalizadas de suplementos nutricionais',
      details: [
        'Análise de deficiências',
        'Recomendação de suplementos',
        'Orientação de uso',
        'Monitoramento de resultados',
        'Produtos de qualidade comprovada',
      ],
      price: 'A combinar',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços nutricionais para atender suas necessidades específicas.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col"
              >
                <div className="text-4xl mb-4 text-primary">{ICON_MAP[service.icon as keyof typeof ICON_MAP]}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{service.description}</p>
                <button
                  onClick={() => handleWhatsApp((service as any).message)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg transition-colors duration-200 font-medium"
                >
                  <MessageCircle size={16} />
                  Saiba Mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Detalhes dos Serviços</h2>
          <div className="space-y-8">
            {Object.entries(serviceDetails).map(([key, service]) => (
              <div key={key} className="p-8 bg-background border border-border rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-3xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Valor</p>
                      <p className="text-3xl font-bold text-primary mb-8">{service.price}</p>
                    </div>
                    <button
                      onClick={() => handleWhatsApp((service as any).message)}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      <MessageCircle size={18} />
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Dúvidas sobre qual serviço escolher?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato comigo para uma consulta inicial gratuita e descubra qual serviço é o melhor para você.
          </p>
          <button
            onClick={() => handleWhatsApp('Olá! Gostaria de mais informações sobre seus serviços.')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-lg"
          >
            <MessageCircle size={20} />
            Entrar em Contato
          </button>
        </div>
      </section>

      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Footer */}
      <Footer />
    </div>
  );
}
