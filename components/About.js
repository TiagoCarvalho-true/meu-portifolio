import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="container mt-5 text-center">
      <h2>Sobre Mim</h2>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-md-4">
          <Image src="/minha_foto.png" alt="Minha Foto" width={200} height={200} className="img-main" />
        </div>
        <div className="col-12 col-md-8">
          <p className="text-left">
            Olá! Meu nome é Tiago e sou apaixonado por programação, automação e análise de dados.
            Gosto de resolver problemas com código e estou sempre buscando aprender novas tecnologias.
            Atualmente, estou focado no desenvolvimento web e na criação de soluções eficientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;