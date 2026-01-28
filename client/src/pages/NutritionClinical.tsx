import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle, Activity, Heart, Thermometer, User, Flower2, Zap } from 'lucide-react';

export default function NutritionClinical() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const conditions = [
    {
      title: 'Diabetes',
      icon: Activity,
      description: 'Controle glicêmico através de uma alimentação estratégica e personalizada.',
      details: ['Monitoramento de carboidratos', 'Controle de índice glicêmico', 'Educação alimentar contínua'],
    },
    {
      title: 'Hipertensão',
      icon: Heart,
      description: 'Redução de sódio e otimização de nutrientes para controle da pressão arterial.',
      details: ['Redução de sódio', 'Aumento de potássio', 'Controle de peso'],
    },
    {
      title: 'Menopausa',
      icon: Thermometer,
      description: 'Nutrição adequada para aliviar sintomas e manter qualidade de vida.',
      details: ['Aumento de cálcio', 'Fitoestrógenos', 'Vitaminas e minerais'],
    },
    {
      title: 'Ovário Policístico',
      icon: Flower2,
      description: 'Alimentação anti-inflamatória e hormonal para SOP.',
      details: ['Redução de inflamação', 'Controle de insulina', 'Suplementação adequada'],
    },
    {
      title: 'Saúde da Mulher',
      icon: User,
      description: 'Nutrição específica para cada fase da vida da mulher.',
      details: ['Ciclo menstrual', 'Gravidez e lactação', 'Prevenção de doenças'],
    },
    {
      title: 'Metabolismo',
      icon: Zap,
      description: 'Otimização metabólica e melhora da disposição diária.',
      details: ['Perfil lipídico', 'Energia celular', 'Equilíbrio hormonal'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            Nutrição <span className="text-primary">Clínica</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Tratamento nutricional baseado em evidências para o controle e prevenção de patologias.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="group p-10 bg-card border border-border rounded-[2.5rem] hover-glow transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <condition.icon size={32} />
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">{condition.title}</h3>
                <p className="text-muted-foreground font-medium mb-6 leading-relaxed">{condition.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {condition.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionClinical)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-muted hover:bg-primary hover:text-white text-foreground rounded-2xl transition-all duration-300 font-bold"
                >
                  <MessageCircle size={20} />
                  Saber Mais
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container">
        <div className="relative p-12 md:p-20 bg-primary rounded-[4rem] overflow-hidden text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Sua saúde não pode esperar.</h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-medium">Agende uma consulta clínica e inicie seu protocolo de tratamento personalizado.</p>
            <button
              onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionClinical)}
              className="px-12 py-6 bg-white text-primary rounded-2xl font-black text-xl hover:scale-110 transition-all shadow-2xl active:scale-95"
            >
              Agendar Agora
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
