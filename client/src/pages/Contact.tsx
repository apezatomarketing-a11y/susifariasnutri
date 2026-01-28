import { useState } from 'react';
import FloatingButtons from '@/components/FloatingButtons';
import Footer from '@/components/Footer';
import { CONTACT_INFO, GOOGLE_MAPS } from '@/lib/constants';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Olá! Meu nome é ${formData.name}. Email: ${formData.email}. Telefone: ${formData.phone}. Mensagem: ${formData.message}`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encoded}`;
    
    window.open(url, '_blank');
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estou aqui para responder suas dúvidas e agendar sua consulta.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="p-8 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors duration-200">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Telefone</h3>
              <p className="text-muted-foreground mb-4">{CONTACT_INFO.phone}</p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="inline-block px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200 font-medium"
              >
                Ligar
              </a>
            </div>

            {/* Email */}
            <div className="p-8 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors duration-200">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4 break-all">{CONTACT_INFO.email}</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-block px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200 font-medium"
              >
                Enviar Email
              </a>
            </div>

            {/* Address */}
            <div className="p-8 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors duration-200">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Localização</h3>
              <p className="text-muted-foreground mb-4 text-sm">{CONTACT_INFO.addressShort}</p>
              <a
                href={GOOGLE_MAPS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200 font-medium"
              >
                Ver no Mapa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="p-8 bg-background border border-border rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(12) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem aqui..."
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
                >
                  <MessageCircle size={18} />
                  Enviar via WhatsApp
                </Button>
                {submitted && (
                  <p className="text-sm text-secondary text-center">
                    Mensagem enviada com sucesso!
                  </p>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-96 md:h-auto">
              <iframe
                src={GOOGLE_MAPS.embedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
