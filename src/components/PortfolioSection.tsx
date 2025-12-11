import portfolio1 from "@/assets/portfolio-1.jpeg";
import portfolioHeart from "@/assets/portfolio-heart.jpg";
import portfolioChristmas from "@/assets/portfolio-christmas.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Porta-Retrato Decorado",
    category: "Decoração",
  },
  {
    image: portfolioHeart,
    title: "Potinho Coração Personalizado",
    category: "Personalização",
  },
  {
    image: portfolioChristmas,
    title: "Bandeja Natalina",
    category: "Edição Especial",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfólio" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-sans text-sm text-gold uppercase tracking-widest mb-4">
            Nossas Criações
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Portfólio
          </h2>
          
          <p className="font-sans text-muted-foreground">
            Cada peça conta uma história. Conheça algumas de nossas criações e inspire-se 
            para criar a sua peça personalizada.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="font-sans text-xs text-primary-foreground/80 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-xl text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="font-sans text-muted-foreground mb-4">
            Quer ver mais criações? Siga nosso Instagram!
          </p>
          <a
            href="https://instagram.com/coldporcelain__"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-primary hover:text-primary/80 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              <circle cx="12" cy="12" r="3.5"/>
              <circle cx="18.5" cy="5.5" r="1.5"/>
            </svg>
            @coldporcelain__
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
