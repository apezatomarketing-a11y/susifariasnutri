import Gallery from '@/components/Gallery';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { FEATURED_IMAGES } from '@/lib/constants';
import { Award, BookOpen, Heart, ShieldCheck } from 'lucide-react';

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(var(--secondary),0.05),transparent_70%)]" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Featured Image Container */}
            <div className="relative order-2 lg:order-1 group">
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={FEATURED_IMAGES.aboutHighlight}
                  alt="Susi Farias - Nutricionista"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Heart size={16} className="text-secondary fill-secondary" />
                <p className="text-xs md:text-sm font-bold text-secondary uppercase tracking-widest">Minha História</p>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                Susi <span className="text-primary">Farias</span>
              </h1>
              
              <div className="space-y-6 text-lg text-muted-foreground font-medium leading-relaxed">
                <p className="animate-in fade-in slide-in-from-right-10 duration-700 delay-100">
                  Nutricionista clínica e esportiva com mais de <span className="text-foreground font-bold">10 anos de experiência</span> transformando vidas através da alimentação consciente.
                </p>
                <p className="animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
                  Acredito que a nutrição vai além de contar calorias; trata-se de nutrir o corpo, a mente e o espírito de forma equilibrada e prazerosa.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: ShieldCheck, text: 'Abordagem Humanizada' },
                    { icon: Award, text: 'Especialista em Clínica' },
                    { icon: BookOpen, text: 'Base Científica' },
                    { icon: Heart, text: 'Foco no Bem-estar' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors">
                      <item.icon className="text-primary" size={20} />
                      <span className="text-sm font-bold text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Minha Jornada Profissional</h2>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                Cada conquista é o resultado de anos de estudo e dedicação aos meus pacientes.
              </p>
              <div className="space-y-4">
                <div className="p-8 bg-card border border-border rounded-[2rem] hover-lift">
                  <h3 className="text-2xl font-bold text-primary mb-2">Formação Contínua</h3>
                  <p className="text-muted-foreground font-medium">Participação constante em congressos e especializações para trazer o que há de mais moderno na nutrição.</p>
                </div>
                <div className="p-8 bg-card border border-border rounded-[2rem] hover-lift">
                  <h3 className="text-2xl font-bold text-secondary mb-2">Especialidades</h3>
                  <p className="text-muted-foreground font-medium">Nutrição Clínica, Esportiva, Comportamental e protocolos de emagrecimento avançado.</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-secondary/20 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl">
                <img
                  src={FEATURED_IMAGES.aboutAchievement}
                  alt="Conquista Profissional"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Galeria de Conquistas</h2>
          <p className="text-lg text-muted-foreground font-medium">Momentos que marcaram minha trajetória e o sucesso dos meus pacientes.</p>
        </div>
        <Gallery />
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Vamos escrever sua história de sucesso?</h2>
          <p className="text-xl text-muted-foreground font-medium">Estou pronta para te guiar nessa jornada de transformação.</p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-6 bg-primary text-white rounded-2xl font-black text-xl hover:scale-110 transition-all shadow-xl shadow-primary/20"
          >
            Agendar Consulta
          </a>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
