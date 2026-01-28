import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle, Zap } from 'lucide-react';

export default function NutritionSports() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const topics = [
    {
      title: 'Nutrição Pré-Treino',
      description: 'Alimentação estratégica para maximizar energia e desempenho.',
      tips: [
        'Carboidratos de fácil absorção',
        'Proteína de rápida digestão',
        'Hidratação adequada',
        'Timing correto',
      ],
    },
    {
      title: 'Nutrição Pós-Treino',
      description: 'Recuperação muscular e reposição de energia.',
      tips: [
        'Proteína para síntese muscular',
        'Carboidratos para recuperação',
        'Antioxidantes',
        'Hidratação e eletrólitos',
      ],
    },
    {
      title: 'Suplementação Esportiva',
      description: 'Suplementos comprovados para melhorar desempenho.',
      tips: [
        'Whey Protein',
        'Creatina',
        'BCAAs',
        'Vitaminas e minerais',
      ],
    },
    {
      title: 'Hidratação',
      description: 'Estratégia de hidratação para ótimo desempenho.',
      tips: [
        'Água como base',
        'Eletrólitos em exercícios longos',
        'Bebidas isotônicas',
        'Monitoramento de peso',
      ],
    },
    {
      title: 'Composição Corporal',
      description: 'Nutrição para ganho de massa ou perda de gordura.',
      tips: [
        'Balanço calórico',
        'Proteína adequada',
        'Treino de força',
        'Consistência',
      ],
    },
    {
      title: 'Periodização Nutricional',
      description: 'Nutrição adaptada às fases do treinamento.',
      tips: [
        'Fase de ganho',
        'Fase de definição',
        'Fase de manutenção',
        'Ajustes estratégicos',
      ],
    },
  ];

  const benefits = [
    'Aumento de desempenho',
    'Recuperação mais rápida',
    'Ganho de massa muscular',
    'Redução de gordura',
    'Prevenção de lesões',
    'Melhora de energia',
    'Resistência aumentada',
    'Bem-estar geral',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nutrição Esportiva</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Otimize seu desempenho atlético com nutrição científica e personalizada.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{topic.title}</h3>
                <p className="text-muted-foreground mb-4">{topic.description}</p>
                <ul className="space-y-2 mb-6">
                  {topic.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-center gap-2 text-sm">
                      <Zap size={14} className="text-secondary flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionSports)}
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

      {/* Benefits Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefícios da Nutrição Esportiva</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg text-center hover:border-primary transition-colors duration-200"
              >
                <Zap className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Potencialize Seu Desempenho</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma consulta e receba um plano nutricional personalizado para seus objetivos atlético.
          </p>
          <button
            onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionSports)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-lg"
          >
            <MessageCircle size={20} />
            Agendar Consulta
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
