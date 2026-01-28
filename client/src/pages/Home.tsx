import { GOOGLE_MAPS, FEATURED_IMAGES, CONTACT_INFO, WHATSAPP_MESSAGES, VIDEOS } from '@/lib/constants';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { MapPin, MessageCircle, Star, Users, Award, CheckCircle2, Play } from 'lucide-react';

export default function Home() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.05),transparent_70%)]" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse-slow" />

        <div className="container relative z-10 py-12 md:py-0 px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Star size={16} className="text-primary fill-primary animate-spin-slow" />
                <p className="text-xs md:text-sm font-bold text-primary uppercase tracking-widest">Nutrição de Alta Performance</p>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.1] animate-in fade-in slide-in-from-left-10 duration-1000">
                  Transforme sua saúde, seu corpo e sua relação com a <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
                    alimentação.
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-left-10 duration-1000 delay-200">
                  Nutrição clínica e esportiva com base científica, atendimento humanizado e estratégias personalizadas para resultados reais, seguros e sustentáveis.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
                  Com mais de 20 anos de experiência na área da saúde, ajudo mulheres e homens a recuperarem o equilíbrio metabólico, hormonal e emocional por meio de um acompanhamento nutricional individualizado, respeitando rotina, história e necessidades únicas de cada pessoa.
                </p>
                <p className="text-sm md:text-base text-foreground font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-left-10 duration-1000 delay-400">
                  Aqui, o foco não é apenas emagrecer — é construir saúde, autoestima e qualidade de vida de forma consciente e duradoura.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
                  className="group relative px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    <MessageCircle size={22} />
                    Agendar Agora
                  </span>
                </button>
                <a
                  href="/services"
                  className="px-8 py-4 bg-card border border-border rounded-2xl font-bold text-lg hover:bg-muted transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  Ver Serviços
                </a>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 animate-in fade-in duration-1000 delay-700">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                      {i}+
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  <span className="text-foreground font-bold">500+</span> vidas transformadas
                </p>
              </div>
            </div>

            {/* Video/Image Container */}
            <div className="relative order-1 lg:order-2 group animate-in fade-in zoom-in duration-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-card shadow-2xl bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  poster={FEATURED_IMAGES.home}
                >
                  <source src={VIDEOS.home} type="video/mp4" />
                  <source src={VIDEOS.home} type="video/quicktime" />
                  <img src={FEATURED_IMAGES.home} alt="Susi Farias" className="w-full h-full object-cover" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
                
                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 p-6 glass-effect rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-xl">
                      <Award className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase">Especialista</p>
                      <p className="font-bold">Nutrição Clínica & Esportiva</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section - Acima do Vídeo */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
              Cuidar da sua saúde é um compromisso com a sua melhor versão.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Cada corpo tem uma história, cada pessoa tem uma rotina, e é por isso que o meu trabalho é totalmente personalizado. Unindo ciência, experiência clínica e um olhar humano, desenvolvo estratégias nutricionais que promovem equilíbrio, desempenho, bem-estar e resultados que você consegue manter ao longo da vida.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - Abaixo do Banner */}
      <section className="py-16 md:py-24">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2rem] opacity-20 blur-xl" />
            <div className="relative aspect-video rounded-[2rem] overflow-hidden border-4 border-card shadow-2xl bg-black">
              <video
                controls
                className="w-full h-full object-cover"
                poster={FEATURED_IMAGES.home}
              >
                <source src={VIDEOS.home} type="video/mp4" />
                <source src={VIDEOS.home} type="video/quicktime" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container relative z-10 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Anos de Exp.', val: '20+', icon: Award, color: 'text-primary' },
              { label: 'Pacientes', val: '500+', icon: Users, color: 'text-secondary' },
              { label: 'Satisfação', val: '98%', icon: Star, color: 'text-primary' },
              { label: 'Protocolos', val: '15+', icon: CheckCircle2, color: 'text-secondary' },
            ].map((stat, i) => (
              <div key={i} className="group p-6 md:p-8 bg-card border border-border rounded-3xl hover-lift text-center">
                <stat.icon className={`${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} size={32} />
                <div className="text-3xl md:text-4xl font-black mb-1">{stat.val}</div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-tighter">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Especialidades</h2>
              <p className="text-lg text-muted-foreground font-medium">Protocolos exclusivos desenvolvidos para cada fase da sua jornada.</p>
            </div>
            <a href="/services" className="text-primary font-bold flex items-center gap-2 group">
              Ver todos os serviços
              <span className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Clínica', desc: 'Tratamento de patologias e reeducação alimentar.', icon: '🏥' },
              { title: 'Esportiva', desc: 'Performance, hipertrofia e emagrecimento.', icon: '⚡' },
              { title: 'Mounjaro', desc: 'Acompanhamento especializado em protocolos injetáveis.', icon: '💉' },
            ].map((s, i) => (
              <div key={i} className="p-8 md:p-10 bg-card border border-border rounded-[2.5rem] hover-glow group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
                <h3 className="text-2xl font-black mb-4">{s.title}</h3>
                <p className="text-muted-foreground font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 md:py-24">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Onde Estamos</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="p-4 bg-primary/10 rounded-2xl h-fit">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">Consultório SJC</p>
                    <p className="text-muted-foreground font-medium">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <button
                  onClick={() => window.open(GOOGLE_MAPS.mapsLink, '_blank')}
                  className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20"
                >
                  Traçar Rota no Maps
                </button>
              </div>
            </div>
            <div className="h-[450px] rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl relative group">
              <iframe
                src={GOOGLE_MAPS.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative p-12 md:p-24 bg-primary rounded-[4rem] overflow-hidden text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Vamos começar sua transformação?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-medium">Agende sua avaliação e dê o primeiro passo para uma vida mais saudável.</p>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.floatingButton)}
              className="px-12 py-6 bg-white text-primary rounded-2xl font-black text-xl hover:scale-110 transition-all shadow-2xl active:scale-95"
            >
              Agendar via WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
