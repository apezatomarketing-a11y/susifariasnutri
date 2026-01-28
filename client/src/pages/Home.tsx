import { FEATURED_IMAGES, VIDEOS, GOOGLE_MAPS } from '@/lib/constants';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Transformando Vidas
              </h1>
              <p className="text-xl text-muted-foreground">
                Através da nutrição personalizada e acompanhamento profissional, ajudo você a alcançar seus objetivos de saúde e bem-estar.
              </p>
              <p className="text-lg text-foreground font-medium">
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
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden border border-border">
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

      {/* Video Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Conheça Meu Trabalho</h2>
          <div className="max-w-2xl mx-auto rounded-lg overflow-hidden border border-border">
            <video
              controls
              className="w-full h-auto"
              poster={FEATURED_IMAGES.home}
            >
              <source src={VIDEOS.home} type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Conquistas e Resultados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: '500+',
                description: 'Pacientes Atendidos',
              },
              {
                icon: '⭐',
                title: '95%',
                description: 'Taxa de Satisfação',
              },
              {
                icon: '🏆',
                title: '10+',
                description: 'Anos de Experiência',
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 text-center"
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-3xl font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Group Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Comunidade no WhatsApp</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se ao nosso grupo exclusivo no WhatsApp para receber dicas de nutrição, receitas saudáveis e atualizações sobre novos serviços.
          </p>
          <a
            href="https://chat.whatsapp.com/seu-grupo-aqui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors duration-200 font-medium text-lg"
          >
            Entrar no Grupo
          </a>
        </div>
      </section>

      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Footer */}
      <Footer />
    </div>
  );
}
