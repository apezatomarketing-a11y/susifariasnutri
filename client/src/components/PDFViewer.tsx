import { useState, useEffect } from 'react';
import { Download, AlertCircle } from 'lucide-react';

interface PDFViewerProps {
  url: string;
  title?: string;
  className?: string;
}

export default function PDFViewer({ url, title = 'PDF Document', className = '' }: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Verify PDF is accessible
    const checkPDF = async () => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        if (!response.ok) {
          setError('PDF não está acessível no momento');
        }
        setIsLoading(false);
      } catch (err) {
        setError('Erro ao carregar o PDF');
        setIsLoading(false);
      }
    };

    checkPDF();
  }, [url]);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 bg-red-50 border border-red-200 rounded-lg ${className}`}>
        <AlertCircle className="text-red-500 mb-4" size={48} />
        <p className="text-red-700 font-semibold mb-4">{error}</p>
        <a
          href={url}
          download
          className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2"
        >
          <Download size={20} />
          Baixar PDF
        </a>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Desktop View - Full PDF Embed */}
      <div className="hidden md:block">
        <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '8.5/11' }}>
          <iframe
            src={`${url}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full h-full border-0"
            title={title}
            loading="lazy"
          />
        </div>
      </div>

      {/* Mobile View - Optimized for small screens */}
      <div className="md:hidden">
        <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '8.5/11' }}>
          <iframe
            src={`${url}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
            className="w-full h-full border-0"
            title={title}
            loading="lazy"
          />
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-center pt-4">
        <a
          href={url}
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold shadow-md hover:shadow-lg"
        >
          <Download size={20} />
          <span className="hidden sm:inline">Baixar PDF Completo</span>
          <span className="sm:hidden">Baixar PDF</span>
        </a>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin">
            <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
          </div>
        </div>
      )}
    </div>
  );
}
