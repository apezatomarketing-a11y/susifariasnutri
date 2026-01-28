import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

export default function NutritionClinical() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const conditions = [
    {
      title: 'Diabetes',
      description: 'Controle glicêmico através de uma alimentação estratégica e personalizada.',
      details: [
        'Monitoramento de carboidratos',
        'Controle de índice glicêmico',
        'Educação alimentar contínua',
        'Acompanhamento de exames',
      ],
    },
    {
      title: 'Hipertensão',
      description: 'Redução de sódio e otimização de nutrientes para controle da pressão arterial.',
      details: [
        'Redução de sódio',
        'Aumento de potássio',
        'Controle de peso',
        'Educação sobre rótulos',
      ],
    },
    {
      title: 'Menopausa',
      description: 'Nutrição adequada para aliviar sintomas e manter qualidade de vida.',
      details: [
        'Aumento de cálcio',
        'Fitoestrógenos',
        'Vitaminas e minerais',
        'Alimentos funcionais',
      ],
    },
    {
      title: 'Ovário Policístico (SOP)',
      description: 'Alimentação anti-inflamatória e hormonal para SOP.',
      details: [
        'Redução de inflamação',
        'Controle de insulina',
        'Alimentos anti-inflamatórios',
        'Suplementação adequada',
      ],
    },
    {
      title: 'Saúde da Mulher',
      description: 'Nutrição específica para cada fase da vida da mulher.',
      details: [
        'Menarca e ciclo menstrual',
        'Gravidez e lactação',
        'Menopausa',
        'Prevenção de doenças',
      ],
    },
    {
      title: 'Menarca',
      description: 'Nutrição adequada para adolescentes em transição.',
      details: [
        'Ferro e cálcio',
        'Vitaminas do complexo B',
        'Educação alimentar',
        'Hábitos saudáveis',
      ],
    },
    {
      title: 'Baixo Libido',
      description: 'Nutrição para melhorar desempenho sexual e libido.',
      details: [
        'Alimentos afrodisíacos',
        'Circulação sanguínea',
        'Hormônios sexuais',
        'Bem-estar geral',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nutrição Clínica</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tratamento nutricional personalizado para diversas condições clínicas, com foco em melhorar sua qualidade de vida.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{condition.title}</h3>
                <p className="text-muted-foreground mb-4">{condition.description}</p>
                <ul className="space-y-2 mb-6">
                  {condition.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionClinical)}
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

      {/* CTA Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Transformar Sua Saúde?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma consulta comigo e descubra como a nutrição clínica pode ajudá-lo a alcançar seus objetivos de saúde.
          </p>
          <button
            onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.nutritionClinical)}
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
