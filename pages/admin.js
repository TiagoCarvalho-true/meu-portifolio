import { useState } from "react";

const Admin = () => {
    const [name, setName] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert("Selecione um arquivo!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("file", file);

        const response = await fetch("/api/certificados", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("Certificado adicionado com sucesso!");
            setName(""); // Limpa o campo de nome
            setFile(null); // Limpa o campo do arquivo
        } else {
            alert("Erro ao adicionar certificado!");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Admin - Adicionar Certificado</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">PDF do Certificado</label>
                    <input type="file" className="form-control" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
                </div>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </form>
        </div>
    );
};

export default Admin;
