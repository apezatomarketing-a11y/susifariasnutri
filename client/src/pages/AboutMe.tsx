import Gallery from '@/components/Gallery';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { FEATURED_IMAGES } from '@/lib/constants';

export default function AboutMe() {
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
            {/* Featured Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden border border-border order-2 md:order-1 shadow-2xl">
              <img
                src={FEATURED_IMAGES.aboutHighlight}
                alt="Susi Farias - Destaque"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-slide-in order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <p className="text-sm font-medium text-primary">👋 Conheça Minha História</p>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                Sobre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mim</span>
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Olá! Sou Susi Farias, nutricionista clínica e esportiva com mais de 10 anos de experiência no atendimento nutricional.
                </p>
                <p>
                  Minha paixão é ajudar pessoas a transformarem suas vidas através de uma nutrição personalizada e consciente. Acredito que cada pessoa é única e merece um plano alimentar específico para suas necessidades.
                </p>
                <p>
                  Trabalho com diversas condições clínicas como diabetes, hipertensão, menopausa, ovário policístico e outras, sempre com uma abordagem humanizada e baseada em evidências científicas.
                </p>
                <p>
                  Também sou especialista em nutrição esportiva, ajudando atletas e praticantes de atividades físicas a otimizarem seu desempenho através de uma alimentação estratégica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Photo Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Minha Jornada</h2>
            <p className="text-lg text-muted-foreground">Momentos marcantes na minha carreira profissional</p>
          </div>
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={FEATURED_IMAGES.aboutAchievement}
              alt="Conquista"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Galeria de Conquistas</h2>
            <p className="text-lg text-muted-foreground">Confira alguns momentos especiais da minha trajetória</p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Minhas Conquistas</h2>
            <p className="text-lg text-muted-foreground">Resultados que falam por si</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors duration-200">
              <div className="text-5xl font-bold text-primary mb-3">500+</div>
              <p className="text-lg font-semibold mb-2">Pacientes Transformados</p>
              <p className="text-muted-foreground">Histórias de sucesso e transformação de vida</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors duration-200">
              <div className="text-5xl font-bold text-secondary mb-3">10+</div>
              <p className="text-lg font-semibold mb-2">Anos de Experiência</p>
              <p className="text-muted-foreground">Dedicação e conhecimento aprofundado</p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors duration-200">
              <div className="text-5xl font-bold text-primary mb-3">95%</div>
              <p className="text-lg font-semibold mb-2">Taxa de Satisfação</p>
              <p className="text-muted-foreground">Confiança e qualidade no atendimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <FloatingButtons />

      {/* Footer */}
      <Footer />
    </div>
  );
}
