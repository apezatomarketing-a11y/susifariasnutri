import Gallery from '@/components/Gallery';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { FEATURED_IMAGES } from '@/lib/constants';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Featured Image */}
            <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden border border-border order-2 md:order-1">
              <img
                src={FEATURED_IMAGES.aboutHighlight}
                alt="Susi Farias - Destaque"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Text Content */}
            <div className="space-y-6 animate-slide-in order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl font-bold">Sobre Mim</h1>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Minha Jornada</h2>
          <div className="max-w-2xl mx-auto rounded-lg overflow-hidden border border-border">
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
          <h2 className="text-4xl font-bold mb-12 text-center">Galeria</h2>
          <Gallery />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Minhas Conquistas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Formação Acadêmica',
                items: [
                  'Graduação em Nutrição',
                  'Especialização em Nutrição Clínica',
                  'Especialização em Nutrição Esportiva',
                  'Cursos Contínuos em Nutrição Funcional',
                ],
              },
              {
                title: 'Experiência Profissional',
                items: [
                  'Mais de 10 anos de experiência',
                  '500+ pacientes atendidos',
                  'Taxa de satisfação de 95%',
                  'Parcerias com clínicas e academias',
                ],
              },
              {
                title: 'Especialidades',
                items: [
                  'Nutrição Clínica',
                  'Nutrição Esportiva',
                  'Nutrição Funcional',
                  'Avaliação de Composição Corporal',
                ],
              },
              {
                title: 'Diferenciais',
                items: [
                  'Atendimento Personalizado',
                  'Acompanhamento Contínuo',
                  'Uso de Tecnologia Avançada',
                  'Abordagem Humanizada',
                ],
              },
            ].map((achievement, index) => (
              <div key={index} className="p-8 bg-card border border-border rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-4">{achievement.title}</h3>
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-secondary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
