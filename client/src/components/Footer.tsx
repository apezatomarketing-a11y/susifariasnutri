import { useState } from 'react';
import { useLocation } from 'wouter';
import { Instagram, Facebook, Linkedin, Youtube, Mail } from 'lucide-react';
import { FOOTER_LINKS, POLICY_LINKS, SOCIAL_MEDIA, COMPANY_INFO } from '@/lib/constants';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Footer() {
  const [, navigate] = useLocation();
  const [openPolicy, setOpenPolicy] = useState<string | null>(null);

  const handleNavigation = (href: string) => {
    navigate(href);
    window.scrollTo(0, 0);
  };

  const policyContent = {
    privacy: `Política de Privacidade

Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.

1. Coleta de Informações
Coletamos informações que você nos fornece voluntariamente através de formulários de contato, como nome, email e telefone.

2. Uso das Informações
Usamos suas informações para:
- Responder suas consultas
- Agendar consultas
- Enviar informações sobre nossos serviços
- Melhorar nossa experiência

3. Proteção de Dados
Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado.

4. Contato
Para questões sobre privacidade, entre em contato conosco através do email ou WhatsApp.`,
    terms: `Termos de Uso

Bem-vindo ao site de Susi Farias Nutricionista. Ao acessar este site, você concorda com os seguintes termos:

1. Uso Autorizado
Este site é fornecido apenas para fins informativos e educacionais. Você concorda em usar este site apenas para fins legais.

2. Isenção de Responsabilidade
As informações fornecidas neste site não substituem o aconselhamento profissional. Sempre consulte um profissional de saúde.

3. Limitação de Responsabilidade
Susi Farias não será responsável por danos indiretos, incidentais ou consequentes resultantes do uso deste site.

4. Modificações
Reservamos o direito de modificar estes termos a qualquer momento.

5. Lei Aplicável
Estes termos são regidos pelas leis do Brasil.`,
    cookies: `Política de Cookies

Este site utiliza cookies para melhorar sua experiência.

1. O que são Cookies?
Cookies são pequenos arquivos de texto armazenados no seu dispositivo que ajudam a personalizar sua experiência.

2. Tipos de Cookies
- Cookies Essenciais: Necessários para o funcionamento do site
- Cookies de Preferência: Lembram suas preferências
- Cookies de Análise: Ajudam a entender como você usa o site

3. Controle de Cookies
Você pode controlar cookies através das configurações do seu navegador.

4. Cookies de Terceiros
Este site pode conter links para serviços de terceiros que usam seus próprios cookies.`,
  };

  return (
    <>
      <footer className="bg-card border-t border-border mt-20">
        <div className="container py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">SF</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{COMPANY_INFO.name}</h3>
              <p className="text-sm text-muted-foreground">{COMPANY_INFO.tagline}</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <nav className="space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavigation(link.href)}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SOCIAL_MEDIA.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={SOCIAL_MEDIA.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={SOCIAL_MEDIA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={SOCIAL_MEDIA.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                  title="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href={`mailto:${SOCIAL_MEDIA.google}`}
                  className="p-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200"
                  title="Google"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="text-primary font-medium">WhatsApp:</span> (12) 99136-3030
                </p>
                <p>
                  <span className="text-primary font-medium">Email:</span> susileoni@yahoo.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="border-t border-border pt-8 mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {POLICY_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={() => setOpenPolicy(link.label.toLowerCase().split(' ')[0])}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            <p className="mb-2">
              © {COMPANY_INFO.year} {COMPANY_INFO.name}. Todos os direitos reservados.
            </p>
            <p>
              Desenvolvido por{' '}
              <a
                href={COMPANY_INFO.developedByUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                {COMPANY_INFO.developedBy}
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Policy Dialogs */}
      <Dialog open={openPolicy !== null} onOpenChange={(open) => !open && setOpenPolicy(null)}>
        <DialogContent className="max-h-96 overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {openPolicy === 'política' ? 'Política de Privacidade' : openPolicy === 'termos' ? 'Termos de Uso' : 'Política de Cookies'}
            </DialogTitle>
          </DialogHeader>
          <div className="whitespace-pre-wrap text-sm text-muted-foreground">
            {openPolicy === 'política' && policyContent.privacy}
            {openPolicy === 'termos' && policyContent.terms}
            {openPolicy === 'política' && policyContent.cookies}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
