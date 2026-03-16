import { useState, useMemo } from 'react';
import { Activity, TrendingDown, AlertCircle, CheckCircle2 } from 'lucide-react';

interface IMCResult {
  imc: number;
  classification: string;
  obesityGrade: string;
  color: string;
  icon: React.ReactNode;
  description: string;
}

export default function IMCCalculator() {
  const [altura, setAltura] = useState<string>('');
  const [peso, setPeso] = useState<string>('');

  const imcData: Record<string, { classification: string; obesityGrade: string; color: string; description: string }> = {
    magreza: {
      classification: 'Magreza',
      obesityGrade: '0',
      color: 'from-blue-400 to-blue-600',
      description: 'Você está abaixo do peso ideal. Consulte um nutricionista para ganhar peso de forma saudável.',
    },
    normal: {
      classification: 'Normal',
      obesityGrade: '0',
      color: 'from-green-400 to-green-600',
      description: 'Parabéns! Seu peso está dentro dos limites saudáveis. Mantenha os hábitos saudáveis!',
    },
    sobrepeso: {
      classification: 'Sobrepeso',
      obesityGrade: 'I',
      color: 'from-yellow-400 to-yellow-600',
      description: 'Você está acima do peso ideal. Pequenas mudanças podem fazer grande diferença.',
    },
    obesidade: {
      classification: 'Obesidade',
      obesityGrade: 'II',
      color: 'from-orange-400 to-orange-600',
      description: 'Você está com obesidade. Procure um profissional de saúde para orientação personalizada.',
    },
    obesidadeGrave: {
      classification: 'Obesidade Grave',
      obesityGrade: 'III',
      color: 'from-red-500 to-red-700',
      description: 'Você está com obesidade grave. Acompanhamento médico e nutricional é essencial.',
    },
  };

  const result = useMemo<IMCResult | null>(() => {
    const alturaNum = parseFloat(altura.replace(',', '.'));
    const pesoNum = parseFloat(peso.replace(',', '.'));

    if (!alturaNum || !pesoNum || alturaNum <= 0 || pesoNum <= 0) {
      return null;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let category: keyof typeof imcData;

    if (imc < 18.5) {
      category = 'magreza';
    } else if (imc < 25) {
      category = 'normal';
    } else if (imc < 30) {
      category = 'sobrepeso';
    } else if (imc < 40) {
      category = 'obesidade';
    } else {
      category = 'obesidadeGrave';
    }

    const data = imcData[category];

    return {
      imc,
      classification: data.classification,
      obesityGrade: data.obesityGrade,
      color: data.color,
      icon:
        category === 'normal' ? (
          <CheckCircle2 size={48} className="text-green-500" />
        ) : category === 'magreza' ? (
          <TrendingDown size={48} className="text-blue-500" />
        ) : (
          <AlertCircle size={48} className="text-orange-500" />
        ),
      description: data.description,
    };
  }, [altura, peso]);

  const handleClear = () => {
    setAltura('');
    setPeso('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-12">
      {/* Input Section */}
      <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 rounded-3xl">
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Activity className="text-primary" size={28} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-foreground">Calcule seu IMC</h3>
              <p className="text-sm text-muted-foreground font-medium">Índice de Massa Corpórea personalizado</p>
            </div>
          </div>

          <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            O IMC (Índice de Massa Corpórea) é um parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal. 
            Insira sua altura e peso nos campos abaixo para descobrir seu IMC e receber orientações personalizadas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Altura Input */}
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-bold text-foreground uppercase tracking-wider mb-3 inline-block">
                  Altura (metros)
                </span>
                <input
                  type="text"
                  placeholder="Ex: 1,70"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  className="w-full px-6 py-4 bg-white border-2 border-primary/20 rounded-2xl text-lg font-bold text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </label>
              <p className="text-xs text-muted-foreground font-medium">Use vírgula como separador decimal</p>
            </div>

            {/* Peso Input */}
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-bold text-foreground uppercase tracking-wider mb-3 inline-block">
                  Peso (quilos)
                </span>
                <input
                  type="text"
                  placeholder="Ex: 69,2"
                  value={peso}
                  onChange={(e) => setPeso(e.target.value)}
                  className="w-full px-6 py-4 bg-white border-2 border-primary/20 rounded-2xl text-lg font-bold text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </label>
              <p className="text-xs text-muted-foreground font-medium">Use vírgula como separador decimal</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handleClear}
              className="flex-1 px-8 py-4 bg-muted hover:bg-muted/80 text-foreground rounded-2xl font-black text-lg transition-all hover:scale-105 active:scale-95"
            >
              Limpar
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Main Result Card */}
          <div className={`p-8 md:p-12 bg-gradient-to-br ${result.color} rounded-3xl text-white shadow-2xl`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-bold uppercase tracking-widest opacity-90">Seu IMC é</p>
                  <p className="text-6xl md:text-7xl font-black tracking-tighter">{result.imc.toFixed(1)}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-2xl md:text-3xl font-black">{result.classification}</p>
                  <p className="text-base md:text-lg font-medium opacity-95 leading-relaxed max-w-md">
                    {result.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                {result.icon}
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-90 mb-1">Grau de Obesidade</p>
                  <p className="text-4xl font-black">{result.obesityGrade}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="p-8 bg-card border border-border rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Altura</p>
                <p className="text-2xl font-black text-foreground">{altura} m</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Peso</p>
                <p className="text-2xl font-black text-foreground">{peso} kg</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-primary uppercase tracking-widest">IMC Calculado</p>
                <p className="text-2xl font-black text-foreground">{result.imc.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Classification Table */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-black tracking-tighter">Tabela de Classificação</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="px-4 py-4 text-left font-black text-foreground uppercase text-sm tracking-wider">IMC</th>
                <th className="px-4 py-4 text-left font-black text-foreground uppercase text-sm tracking-wider">Classificação</th>
                <th className="px-4 py-4 text-left font-black text-foreground uppercase text-sm tracking-wider">Grau de Obesidade</th>
              </tr>
            </thead>
            <tbody className="space-y-2">
              {[
                { range: 'Menor que 18,5', classification: 'Magreza', grade: '0', color: 'bg-blue-50' },
                { range: '18,5 - 24,9', classification: 'Normal', grade: '0', color: 'bg-green-50' },
                { range: '25,0 - 29,9', classification: 'Sobrepeso', grade: 'I', color: 'bg-yellow-50' },
                { range: '30,0 - 39,9', classification: 'Obesidade', grade: 'II', color: 'bg-orange-50' },
                { range: 'Maior que 40,0', classification: 'Obesidade Grave', grade: 'III', color: 'bg-red-50' },
              ].map((row, i) => (
                <tr key={i} className={`${row.color} border border-border/20 rounded-lg`}>
                  <td className="px-4 py-4 font-bold text-foreground">{row.range}</td>
                  <td className="px-4 py-4 font-bold text-foreground">{row.classification}</td>
                  <td className="px-4 py-4 font-bold text-foreground text-center">{row.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Note */}
      <div className="p-6 md:p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
        <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
          <span className="font-black text-blue-600">Importante:</span> Esta calculadora fornece uma estimativa geral. 
          Para uma avaliação completa e personalizada, consulte um nutricionista ou médico. O IMC não leva em conta 
          fatores como massa muscular, densidade óssea e distribuição de gordura corporal.
        </p>
      </div>
    </div>
  );
}
