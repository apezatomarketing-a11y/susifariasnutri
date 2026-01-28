import { GOOGLE_MAPS, FEATURED_IMAGES, CONTACT_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { MapPin, MessageCircle } from 'lucide-react';

export default function Home() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <p className="text-sm font-medium text-primary">✨ Bem-vindo ao meu consultório</p>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent leading-tight">
                Transformando Vidas
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Através da nutrição personalizada e acompanhamento profissional, ajudo você a alcançar seus objetivos de saúde e bem-estar.
              </p>
              <p className="text-lg text-foreground font-semibold">
                Susi Farias - Nutricionista Clínica e Esportiva
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={GOOGLE_MAPS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                >
                  <MapPin size={20} />
                  Ver Localização
                </a>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 text-secondary rounded-lg hover:bg-secondary/20 transition-colors duration-200 font-medium border border-secondary/20"
                >
                  <MessageCircle size={20} />
                  Agendar Consulta
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden border border-border shadow-2xl">
              <img
                src={FEATURED_IMAGES.home}
                alt="Susi Farias"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors duration-200">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Pacientes Atendidos</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors duration-200">
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors duration-200">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meus Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferço uma variedade de serviços personalizados para atender suas necessidades específicas de saúde e bem-estar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-3">Nutrição Clínica</h3>
              <p className="text-muted-foreground">Tratamento de condições de saúde através da nutrição personalizada.</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="text-4xl mb-4">⚽</div>
              <h3 className="text-2xl font-bold mb-3">Nutrição Esportiva</h3>
              <p className="text-muted-foreground">Otimização de desempenho para atletas e praticantes de atividades físicas.</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-2xl font-bold mb-3">Suplementação</h3>
              <p className="text-muted-foreground">Recomendações personalizadas de suplementos nutricionais.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
            >
              Ver Todos os Serviços
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Localização</h2>
            <p className="text-lg text-muted-foreground">{CONTACT_INFO.address}</p>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-border">
            <iframe
              src={GOOGLE_MAPS.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para Transformar Sua Vida?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma consulta inicial e descubra como posso ajudá-lo a alcançar seus objetivos de saúde.
          </p>
          <button
            onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-lg"
          >
            <MessageCircle size={20} />
            Agende Agora
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
