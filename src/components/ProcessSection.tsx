const steps = [
  {
    number: "01",
    title: "Sua Ideia",
    description:
      "Conte-nos o que você imagina! Pode ser uma foto de inspiração, uma descrição ou um esboço simples.",
    icon: "💡",
  },
  {
    number: "02",
    title: "Personalização",
    description:
      "Juntos, definimos cores, tamanho, detalhes e todos os elementos que tornarão sua peça única.",
    icon: "🎨",
  },
  {
    number: "03",
    title: "Produção Manual",
    description:
      "Com cuidado e dedicação, moldamos cada detalhe à mão, garantindo qualidade e exclusividade.",
    icon: "🤲",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Sua peça é finalizada com carinho e enviada com toda proteção para chegar perfeita até você.",
    icon: "📦",
  },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-24 bg-muted/50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-sans text-sm text-gold uppercase tracking-widest mb-4">
            Passo a Passo
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Como Funciona
          </h2>
          
          <p className="font-sans text-muted-foreground">
            Do sonho à realidade em quatro passos simples. Transformamos suas ideias 
            em peças artesanais exclusivas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}
              
              <div className="relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                
                {/* Number */}
                <span className="absolute top-6 right-6 font-display text-5xl font-bold text-muted/50">
                  {step.number}
                </span>
                
                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
