import logo from "@/assets/logo-coldporcelain.jpg";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Cold Porcelain"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-display text-lg font-semibold text-foreground">
              Cold Porcelain
            </span>
          </div>

          {/* Social */}
          <a
            href="https://instagram.com/coldporcelain__"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
              <circle cx="12" cy="12" r="3.5"/>
              <circle cx="18.5" cy="5.5" r="1.5"/>
            </svg>
            @coldporcelain__
          </a>

          {/* Copyright */}
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cold Porcelain. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
