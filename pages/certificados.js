import { useEffect, useState } from "react";

const Certificados = () => {
    const [certificados, setCertificados] = useState([]);

    useEffect(() => {
        fetch("/api/certificados")
            .then(res => res.json())
            .then(data => setCertificados(data))
            .catch(err => console.error("Erro ao buscar certificados:", err));
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Meus Certificados</h2>
            <ul className="list-group mt-3">
                {certificados.map((cert) => (
                    <li key={cert.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {cert.name}
                        <a href={cert.file} target="_blank" className="btn btn-primary" rel="noopener noreferrer">Ver PDF</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Certificados;
