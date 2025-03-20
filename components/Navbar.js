import Image from 'next/image';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src="/logo_portifolio.png" alt="Descrição da imagem" width={150} height={150} className="img-contorno" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                <i className="fa-solid fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">
                <i className="fa-solid fa-project-diagram"></i> Projetos
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/certificados" className="nav-link">
                <i className="fa-solid fa-certificate"></i> Certificados
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;