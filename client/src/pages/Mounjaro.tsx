import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { VIDEOS, WHATSAPP_MESSAGES, CONTACT_INFO } from '@/lib/constants';
import { MessageCircle, CheckCircle, Play, ShieldAlert, Sparkles } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_70%)]" />
        <div className="container relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-bounce-slow">
            <Sparkles size={16} className="text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Inovação Médica</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            Moun<span className="text-primary">jaro</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            O tratamento revolucionário que está transformando o controle de peso e saúde metabólica.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-muted/30 relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Video Container */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500" />
              <div className="relative aspect-video rounded-[3rem] overflow-hidden border-8 border-card shadow-2xl bg-black">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/assets/images/foto inicio.jpeg"
                >
                  <source src={VIDEOS.mounjaro} type="video/mp4" />
                  Seu navegador não suporta reprodução de vídeo.
                </video>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Entenda a Ciência</h2>
              <div className="space-y-6 text-lg text-muted-foreground font-medium">
                <p>
                  Mounjaro (Tirzepatida) é o primeiro e único agonista dos receptores GIP e GLP-1, atuando de forma sinérgica no organismo.
                </p>
                <p>
                  Diferente de outros tratamentos, ele oferece um mecanismo duplo que otimiza a saciedade e melhora significativamente a resposta insulínica.
                </p>
                <button
                  onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.mounjaro)}
                  className="w-full md:w-auto px-10 py-5 bg-primary text-white rounded-2xl font-black text-lg hover:scale-110 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} />
                  Quero saber mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Principais Benefícios</h2>
            <p className="text-lg text-muted-foreground font-medium">Por que este protocolo é tão eficaz?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-[2rem] hover-lift group"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-destructive/5">
        <div className="container">
          <div className="max-w-4xl mx-auto p-12 bg-card border-2 border-destructive/20 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldAlert size={120} className="text-destructive" />
            </div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-black text-destructive flex items-center gap-4">
                <ShieldAlert size={40} />
                Atenção e Segurança
              </h2>
              <p className="text-lg font-bold text-foreground/80 leading-relaxed">
                O uso do Mounjaro deve ser rigorosamente acompanhado por profissionais de saúde. Não é indicado para gestantes, pacientes com histórico de carcinoma medular de tireoide ou neoplasia endócrina múltipla tipo 2.
              </p>
              <div className="pt-4">
                <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Avaliação Obrigatória</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Exames Laboratoriais', 'Histórico Clínico', 'Perfil Metabólico', 'Suporte Nutricional'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 font-bold text-sm">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container text-center max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Pronto para sua melhor versão?</h2>
          <p className="text-xl text-muted-foreground font-medium">Combine a tecnologia do Mounjaro com um plano nutricional de elite.</p>
          <button
            onClick={() => handleWhatsApp(WHATSAPP_MESSAGES.mounjaro)}
            className="px-12 py-6 bg-primary text-white rounded-2xl font-black text-xl hover:scale-110 transition-all shadow-2xl active:scale-95"
          >
            Agendar Avaliação
          </button>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
