import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle, Zap, Dumbbell, Timer, Droplets, Target, TrendingUp } from 'lucide-react';

export default function NutritionSports() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const topics = [
    {
      title: 'Pré-Treino',
      icon: Timer,
      description: 'Estratégias para maximizar energia e foco durante o exercício.',
      tips: ['Carboidratos estratégicos', 'Proteína funcional', 'Timing nutricional'],
    },
    {
      title: 'Pós-Treino',
      icon: TrendingUp,
      description: 'Recuperação acelerada e síntese proteica otimizada.',
      tips: ['Janela de recuperação', 'Reposição de glicogênio', 'Aminoácidos essenciais'],
    },
    {
      title: 'Suplementação',
      icon: Zap,
      description: 'Uso inteligente de suplementos com comprovação científica.',
      tips: ['Creatina e Beta-alanina', 'Whey e Caseína', 'Vitaminas esportivas'],
    },
    {
      title: 'Hidratação',
      icon: Droplets,
      description: 'Equilíbrio hidroeletrolítico para performance máxima.',
      tips: ['Reposição de sais', 'Isotônicos naturais', 'Controle de desidratação'],
    },
    {
      title: 'Hipertrofia',
      icon: Dumbbell,
      description: 'Protocolos específicos para ganho de massa muscular magra.',
      tips: ['Superávit controlado', 'Divisão de macros', 'Consistência anabólica'],
    },
    {
      title: 'Periodização',
      icon: Target,
      description: 'Nutrição adaptada ao seu ciclo de treinamento.',
      tips: ['Fase de força', 'Fase de cutting', 'Manutenção atlética'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--secondary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            Nutrição <span className="text-secondary">Esportiva</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Leve seu desempenho ao próximo nível com estratégias de nutrição de elite.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group p-10 bg-card border border-border rounded-[2.5rem] hover-glow transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <topic.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-secondary transition-colors">{topic.title}</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{topic.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {topic.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                      <Zap size={14} className="text-secondary" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionSports)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-muted hover:bg-secondary hover:text-white text-foreground rounded-2xl transition-all duration-300 font-bold"
                >
                  <MessageCircle size={20} />
                  Otimizar Treino
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-24 bg-secondary/5 border-y border-secondary/10">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16">O Atleta de Elite Nutre seu Sucesso</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Força Extrema', 'Foco Mental', 'Recuperação 2x', 'Energia Infinita'].map((b, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl font-black text-secondary">{b}</div>
                <div className="h-1 w-12 bg-secondary mx-auto rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container">
        <div className="relative p-12 md:p-20 bg-secondary rounded-[4rem] overflow-hidden text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Alcance seu auge físico.</h2>
            <p className="text-lg md:text-xl text-secondary-foreground/80 font-medium">Protocolos esportivos personalizados para quem não aceita menos que o topo.</p>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionSports)}
              className="px-12 py-6 bg-white text-secondary rounded-2xl font-black text-xl hover:scale-110 transition-all shadow-2xl active:scale-95"
            >
              Começar Agora
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
