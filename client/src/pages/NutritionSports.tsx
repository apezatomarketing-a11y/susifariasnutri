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
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--secondary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-8 px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-text">
              Nutrição Esportiva
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Acompanhamento com nutricionista esportivo para performance e resultados. Leve seu desempenho ao próximo nível com estratégias de nutrição de elite desenhadas para atletas e entusiastas!
          </p>
        </div>
      </section>

      {/* O que é Nutrição Esportiva Section */}
      <section className="py-24 md:py-32 bg-muted/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">O que é Nutrição Esportiva</h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                <span className="text-foreground font-bold">Nutrição esportiva personalizada para atletas e praticantes de atividade física</span>
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                A nutrição esportiva é uma área especializada da nutrição que combina alimentação, ciência dos nutrientes e fisiologia do exercício para otimizar seu desempenho físico, acelerar a recuperação muscular, melhorar sua composição corporal, reduzir o risco de lesões e promover saúde e bem-estar no longo prazo.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
                Essa abordagem é indicada tanto para quem treina para competição quanto para quem quer resultados melhores na academia, corrida, ciclismo, musculação ou treino funcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é esse serviço Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">Para quem é esse serviço</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-medium mb-8 leading-relaxed">
              Esse serviço de Nutrição Esportiva é ideal para você que:
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0">✓</div>
                <p className="text-lg font-medium text-foreground">Quer melhorar rendimento nos treinos e em provas</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0">✓</div>
                <p className="text-lg font-medium text-foreground">Busca ganho de massa magra ou perda de gordura com suporte profissional</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0">✓</div>
                <p className="text-lg font-medium text-foreground">Quer recuperar-se mais rápido entre treinos</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0">✓</div>
                <p className="text-lg font-medium text-foreground">Precisa de um plano alimentar esportivo individualizado</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0">✓</div>
                <p className="text-lg font-medium text-foreground">Treina para objetivos específicos (corrida, futebol, crossfit, natação, etc.)</p>
              </div>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-3xl">
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                <span className="font-bold">Nota:</span> o acompanhamento com um nutricionista esportivo vai além de planos genéricos. Ele é adaptado ao seu treino, objetivos e necessidades metabólicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="group p-10 md:p-12 bg-card border border-border rounded-[3rem] hover-glow transition-all duration-500 flex flex-col shadow-sm"
              >
                <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <topic.icon size={40} />
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-secondary transition-colors">{topic.title}</h3>
                <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed">{topic.description}</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {topic.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-base font-bold text-foreground/70">
                      <Zap size={18} className="text-secondary" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionSports)}
                  className="w-full flex items-center justify-center gap-4 px-8 py-5 bg-muted hover:bg-secondary hover:text-white text-foreground rounded-2xl transition-all duration-300 font-black text-lg"
                >
                  <MessageCircle size={24} />
                  Otimizar Treino
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona o acompanhamento Section */}
      <section className="py-24 md:py-32 bg-muted/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Como funciona o acompanhamento</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Consulta de Nutrição Esportiva com a Susi</h3>
                <p className="text-lg text-muted-foreground font-medium mb-6 leading-relaxed">
                  Durante o atendimento, eu realizo:
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="text-2xl flex-shrink-0 text-secondary">•</div>
                    <p className="text-lg font-medium text-foreground">Avaliação detalhada da sua rotina, treinos e objetivos</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="text-2xl flex-shrink-0 text-secondary">•</div>
                    <p className="text-lg font-medium text-foreground">Análise de composição corporal e histórico alimentar</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="text-2xl flex-shrink-0 text-secondary">•</div>
                    <p className="text-lg font-medium text-foreground">Estruturação de um plano alimentar esportivo personalizado</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="text-2xl flex-shrink-0 text-secondary">•</div>
                    <p className="text-lg font-medium text-foreground">Estratégias nutricionais para pré-treino, intra-treino e pós-treino</p>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="text-2xl flex-shrink-0 text-secondary">•</div>
                    <p className="text-lg font-medium text-foreground">Acompanhamento contínuo para ajustes conforme sua evolução</p>
                  </li>
                </ul>
              </div>
              <div className="p-8 md:p-10 bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-3xl">
                <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                  O foco é que você tenha suporte nutricional completo para melhorar performance, recuperação e resultados de forma saudável e sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios da Nutrição Esportiva Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Benefícios da Nutrição Esportiva</h2>
            <h3 className="text-2xl md:text-3xl font-bold">O que a Nutrição Esportiva pode fazer por você</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0 text-secondary">✓</div>
                <p className="text-lg font-medium text-foreground">Aumentar a energia e a resistência física durante os treinos</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0 text-secondary">✓</div>
                <p className="text-lg font-medium text-foreground">Melhorar a recuperação muscular e reduzir dores pós-treino</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0 text-secondary">✓</div>
                <p className="text-lg font-medium text-foreground">Auxiliar no controle de peso e na composição corporal</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0 text-secondary">✓</div>
                <p className="text-lg font-medium text-foreground">Fortalecer o sistema imunológico e reduzir o risco de lesões</p>
              </div>
              <div className="flex gap-4 items-start p-6 bg-card border border-border rounded-2xl hover-lift">
                <div className="text-3xl flex-shrink-0 text-secondary">✓</div>
                <p className="text-lg font-medium text-foreground">Apoiar objetivos específicos como hipertrofia, emagrecimento ou performance em provas</p>
              </div>
            </div>
            <div className="p-8 md:p-10 bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 rounded-3xl">
              <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                A nutrição esportiva é mais do que ingestão de alimentos, ela é uma estratégia personalizada que apoia a sua evolução física com base em ciência e prática profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-24 md:py-32 bg-secondary/5 border-y border-secondary/10">
        <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tighter mb-20">O Atleta de Elite Nutre seu Sucesso</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {['Força Extrema', 'Foco Mental', 'Recuperação 2x', 'Energia Infinita'].map((b, i) => (
              <div key={i} className="space-y-4">
                <div className="text-2xl md:text-4xl font-black text-secondary">{b}</div>
                <div className="h-2 w-16 bg-secondary mx-auto rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative p-16 md:p-32 bg-secondary rounded-[5rem] overflow-hidden text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">Alcance seu auge físico.</h2>
            <p className="text-xl md:text-2xl text-secondary-foreground/80 font-medium leading-relaxed">Protocolos esportivos personalizados para quem não aceita menos que o topo absoluto.</p>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionSports)}
              className="px-16 py-8 bg-white text-secondary rounded-3xl font-black text-2xl hover:scale-110 transition-all shadow-2xl active:scale-95"
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
