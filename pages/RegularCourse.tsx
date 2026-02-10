import React from 'react';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router';
import { 
  CheckCircle2, 
  Dna, 
  HeartPulse, 
  Target, 
  LineChart, 
  AlertCircle, 
  ArrowRight, 
  Brain, 
  Search,
  Users,
  ShieldAlert
} from 'lucide-react';

export const RegularCourse: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Seção Hero */}
      <section className="relative pt-20 pb-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#3b82f6_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-emerald-400 font-bold tracking-[0.2em] text-xs uppercase mb-6 border-l-2 border-emerald-500 pl-4">
              Diet Master Program
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              Qualificação Profissional e Resultado Pessoal: <span className="text-blue-400">Domine a Ciência de Emagrecer em 3 Meses.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              Um programa híbrido que une a teoria acadêmica do emagrecimento com um suporte prático de 3 meses. Pare de depender da força de vontade e comece a entender os mecanismos do seu corpo.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => navigate('/calculator')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-3"
              >
                Agendar Diagnóstico Gratuito e Iniciar
                <ArrowRight size={20} />
              </button>
            </div>
            <p className="mt-8 text-sm text-slate-400 italic">
              *Certificação: Diet Master (Certificação Prática de Dieta)
            </p>
          </div>
        </div>
      </section>

      {/* 2. O Problema */}
      <section className="py-24 bg-stone-50">
        <div className="w-[92%] max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Por que você continua lutando contra a balança?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ganhar ou perder peso não é uma questão de "sorte" ou apenas de "força de vontade". Existem mecanismos biológicos, nutricionais e comportamentais por trás de cada mudança no seu corpo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Você já seguiu dietas da moda e sofreu com o efeito sanfona?",
              "Sente que se esforça muito, mas o resultado não dura?",
              "Fica confuso com informações contraditórias na internet?"
            ].map((text, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6">
                  <ShieldAlert size={24} />
                </div>
                <p className="font-bold text-slate-800 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
            <p className="text-blue-900 font-medium text-lg leading-relaxed">
              O Curso Regular foi desenhado para tirar você desse ciclo, oferecendo uma base teórica sólida e segura para gerenciar sua saúde ou apoiar quem você ama.
            </p>
          </div>
        </div>
      </section>

      {/* 3. A Solução */}
      <section className="py-24 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 block">A Fundação</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Não é apenas uma dieta. <br />É uma formação.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                O Curso Regular é a fundação. Aqui, tratamos o emagrecimento como ciência, não como mágica.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Entendimento Teórico", desc: "Aprenda a lógica do metabolismo, energia e nutrição sem \"terrorismo nutricional\"." },
                  { title: "Segurança Total", desc: "Saiba diferenciar métodos perigosos de estratégias de saúde a longo prazo." },
                  { title: "Prática Supervisionada", desc: "Aplique o conhecimento em você mesmo com acompanhamento profissional." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{i+1}. {item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -z-10 transform rotate-2"></div>
                <div className="bg-slate-100 rounded-[2.5rem] h-[500px] flex items-center justify-center overflow-hidden border border-slate-200">
                  <div className="text-center p-12">
                    <Dna size={80} className="text-blue-600 mx-auto mb-6 opacity-30" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Academic Visual Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O Currículo */}
      <section className="py-24 bg-stone-50">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Conteúdo Programático</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Módulo 1 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6">
                <Dna size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6 text-slate-900">Módulo 1: A Ciência do Corpo</h3>
              <div className="space-y-6 flex-grow">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Capítulo 1 & 2</div>
                  <p className="text-sm text-slate-600 leading-relaxed">A História das Dietas e o Mecanismo de Ganho/Perda de Peso. Por que as dietas modernas falham?</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Capítulo 3 a 5</div>
                  <p className="text-sm text-slate-600 leading-relaxed">Metabolismo e Energia. O que é Taxa Metabolicamente Basal? Como calcular o gasto real? A verdade matemática sobre calorias e nutrientes.</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Capítulo 6</div>
                  <p className="text-sm text-slate-600 leading-relaxed">Metabolismo e Mudança. O que acontece dentro do corpo durante a perda de peso? Aprenda a ler os sinais biológicos.</p>
                </div>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-rose-500 text-white rounded-xl flex items-center justify-center mb-6">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6 text-slate-900">Módulo 2: Saúde e Riscos</h3>
              <div className="space-y-6 flex-grow">
                <div>
                  <div className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2">Capítulo 7</div>
                  <p className="text-sm text-slate-600 leading-relaxed">As Armadilhas do Curto Prazo. Por que perder peso rápido demais pode destruir seu metabolismo.</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-2">Capítulo 8 & 9</div>
                  <p className="text-sm text-slate-600 leading-relaxed">Obesidade e Doenças do Estilo de Vida. Entendendo o IMC, gordura visceral vs. subcutânea e os riscos reais à saúde.</p>
                </div>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6 text-slate-900">Módulo 3: Estratégia e Prática</h3>
              <div className="space-y-4 text-xs font-medium text-slate-600 overflow-y-auto max-h-[350px] pr-2">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold block text-slate-900 mb-1">Capítulo 10</span>
                  Autoconhecimento e Monitoramento. Como transformar dados em estratégia.
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold block text-slate-900 mb-1">Capítulo 11 & 12</span>
                  Princípios do Tratamento da Obesidade. Como desenhar um plano seguro.
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold block text-slate-900 mb-1">Capítulo 13</span>
                  Terapia de Modificação Comportamental. A psicologia por trás do hábito.
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <span className="font-bold block text-slate-900 mb-1">Capítulo 14</span>
                  Nutrição Prática. Como montar refeições reais para rotinas reais.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. O Diferencial */}
      <section className="py-24 bg-white">
        <div className="w-[92%] max-w-[1000px] mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            
            <div className="relative z-10 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Não deixamos você apenas com a teoria.
                  </h2>
                  <h3 className="text-emerald-400 text-xl font-bold mb-8">
                    Programa de Acompanhamento Prático de 3 Meses (Incluso).
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6 text-left">
                    <div className="flex gap-3">
                      <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={20} />
                      <span className="text-sm font-medium">Diagnóstico Inicial Individual</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={20} />
                      <span className="text-sm font-medium">Acompanhamento Semanal</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={20} />
                      <span className="text-sm font-medium">Formato 100% Online (LINE)</span>
                    </div>
                    <div className="flex gap-3">
                      <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={20} />
                      <span className="text-sm font-medium">Meta: -5kg com segurança</span>
                    </div>
                  </div>
                </div>
                <div className="w-48 h-48 rounded-3xl bg-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 border border-white/20">
                  <LineChart size={48} className="text-emerald-400 mb-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Suporte Ativo</span>
                  <span className="text-2xl font-bold">90 DIAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Para Quem é Este Curso? */}
      <section className="py-24 bg-stone-50">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Para Quem é Este Curso?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Emagrecimento Definitivo", text: "Quem quer emagrecer definitivamente e entender o \"porquê\"." },
              { icon: Brain, title: "Fim das Dietas", text: "Quem quer acabar com o ciclo de dietas restritivas." },
              { icon: Users, title: "Carreira em Saúde", text: "Quem deseja obter a certificação \"Diet Master\" e dar o primeiro passo." },
              { icon: HeartPulse, title: "Segurança Familiar", text: "Quem quer ajudar familiares e amigos com segurança." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 text-center hover:-translate-y-1 transition-transform">
                <item.icon size={32} className="text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Segurança e Ética */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="w-[92%] max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 font-bold px-4 py-2 rounded-full text-xs uppercase mb-8">
            <ShieldAlert size={16} />
            Aviso Importante: Segurança e Ética
          </div>
          <p className="text-xl font-bold text-slate-800 mb-8">
            Este programa prioriza a segurança acima do resultado estético.
          </p>
          <div className="space-y-6 text-slate-600 leading-relaxed text-left bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <p><strong className="text-slate-900">Triagem:</strong> Todos os candidatos passam por um "Diagnóstico de Dieta Gratuito" antes da matrícula.</p>
            <p><strong className="text-slate-900">Restrições:</strong> Se identificarmos riscos médicos ou transtornos que exijam intervenção clínica, o candidato será orientado a procurar um médico e não poderá ingressar no curso neste momento. Não vendemos para quem não podemos ajudar com segurança.</p>
          </div>
        </div>
      </section>

      {/* 8. CTA Final */}
      <section className="py-32 bg-slate-900 text-center text-white relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
            Sua jornada para o domínio do emagrecimento começa aqui.
          </h2>
          <button 
            onClick={() => navigate('/calculator')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-emerald-500/20 transition-all mb-6"
          >
            Solicitar Diagnóstico Gratuito e Avaliação
          </button>
          <p className="text-slate-400 text-sm font-medium">
            *Sem compromisso financeiro imediato. A avaliação serve para garantir que o curso é adequado para você.
          </p>
        </div>
      </section>

    </div>
  );
};