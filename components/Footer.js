import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-3 bg-light">
      <p>Conecte-se comigo:</p>
      <a href="https://www.linkedin.com/in/tiago-carvalho-de-almeida-44a74421a/" className="text-dark mx-2"><i className="fab fa-linkedin fa-2x"></i></a>
      <a href="https://github.com/TiagoCarvalho-true" className="text-dark mx-2"><i className="fab fa-github fa-2x"></i></a>
      <a href="https://dev.to/tiago_531" className="text-dark mx-2"><i className="fab fa-dev fa-2x"></i></a>
      <p>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;