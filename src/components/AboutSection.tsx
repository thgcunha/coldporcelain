import aboutImage from "@/assets/about-craft.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-soft-gradient">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 scale-95" />
            <div className="absolute inset-0 bg-secondary/20 rounded-3xl transform -rotate-2 scale-95" />
            <img
              src={aboutImage}
              alt="Processo artesanal de criação em argila fria"
              className="relative rounded-3xl shadow-medium w-full aspect-square object-cover"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-medium">
              <p className="font-display text-4xl font-semibold text-primary">100%</p>
              <p className="font-sans text-sm text-muted-foreground">Artesanal</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block font-sans text-sm text-gold uppercase tracking-widest mb-4">
              Nossa História
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Arte que nasce das <span className="text-primary">mãos</span> e do{" "}
              <span className="text-secondary">coração</span>
            </h2>
            
            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">Cold Porcelain</strong> nasceu da paixão por transformar 
                a argila fria em verdadeiras obras de arte. Cada peça que criamos carrega não apenas 
                material, mas história, dedicação e um toque pessoal que só o trabalho manual pode oferecer.
              </p>
              
              <p>
                Trabalhamos com <strong className="text-foreground">peças totalmente personalizadas</strong>, 
                feitas sob demanda para atender exatamente o que você imagina. Seja um presente especial, 
                uma lembrança de um momento único ou uma decoração exclusiva para seu lar.
              </p>
              
              <p>
                Nossa missão é eternizar memórias e sentimentos através de peças delicadas e únicas, 
                criando conexões especiais entre arte e emoção.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { icon: "✨", title: "Personalização", desc: "Peças únicas" },
                { icon: "🤲", title: "Feito à mão", desc: "100% artesanal" },
                { icon: "💝", title: "Com amor", desc: "Dedicação total" },
                { icon: "🎨", title: "Exclusivo", desc: "Sob demanda" },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">
                      {feature.title}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
