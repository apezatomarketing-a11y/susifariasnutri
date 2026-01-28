import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { VIDEOS, WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle, CheckCircle } from 'lucide-react';

export default function Mounjaro() {
  const handleWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const benefits = [
    'Redução do apetite',
    'Melhor controle glicêmico',
    'Perda de peso sustentável',
    'Melhora da saúde cardiovascular',
    'Aumento de energia',
    'Melhor qualidade de vida',
  ];

  const indications = [
    'Diabetes tipo 2',
    'Obesidade',
    'Síndrome metabólica',
    'Pré-diabetes',
    'Pacientes com comorbidades',
    'Resistência à insulina',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Mounjaro</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tratamento inovador com suporte nutricional personalizado.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Conheça o Mounjaro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="max-w-lg mx-auto rounded-lg overflow-hidden border border-border">
              <video
                controls
                className="w-full h-auto"
              >
                <source src={VIDEOS.mounjaro} type="video/mp4" />
                Seu navegador não suporta reprodução de vídeo.
              </video>
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">O que é Mounjaro?</h3>
              <p className="text-lg text-muted-foreground">
                Mounjaro é um medicamento inovador que ajuda no controle do peso e da glicemia através de um mecanismo duplo de ação.
              </p>
              <p className="text-lg text-muted-foreground">
                Funciona como agonista dos receptores GLP-1 e GIP, reduzindo o apetite, melhorando a saciedade e otimizando o controle glicêmico.
              </p>
              <button
                onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.mounjaro)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
              >
                <MessageCircle size={18} />
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Benefícios do Mounjaro</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-200"
              >
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indications Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Indicações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {indications.map((indication, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg text-center hover:border-primary transition-colors duration-200"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium">{indication}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Informações Importantes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Plano Personalizado</h3>
              <p className="text-muted-foreground mb-4">
                Cada paciente recebe um plano nutricional personalizado que complementa o tratamento com Mounjaro, maximizando resultados e garantindo segurança.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Avaliação completa de saúde
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Plano alimentar adaptado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Acompanhamento contínuo
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  Suporte nutricional especializado
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-2xl font-bold text-primary mb-4">Contraindicações</h3>
              <p className="text-muted-foreground mb-4">
                Mounjaro não é indicado para:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  Pacientes com histórico de câncer medular
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  Neoplasia endócrina múltipla tipo 2
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  Gestantes e lactantes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-destructive rounded-full" />
                  Alergia aos componentes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma consulta comigo para avaliar se o Mounjaro é indicado para você e receber suporte nutricional completo.
          </p>
          <button
            onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.mounjaro)}
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
