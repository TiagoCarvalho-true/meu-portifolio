import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let controller = new AbortController();
        const fetchRepos = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://api.github.com/users/TiagoCarvalho-true/repos', {
                    signal: controller.signal,
                });
                if (!response.ok) throw new Error('Erro ao buscar repositórios');
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
        return () => controller.abort();
    }, []);

    const filteredRepos = repos.filter(repo => {
        if (filter === 'all') return true;
        if (filter === 'frontend') return repo.topics?.includes('frontend');
        if (filter === 'backend') return repo.topics?.includes('backend');
        return false;
    });

    return (
        <div className="container mt-5">
            <h2 className="text-center">Meus Projetos</h2>

            {/* Botões de filtro com melhor visibilidade */}
            <div className="d-flex justify-content-center mb-4">
                {['all', 'frontend', 'backend'].map(type => (
                    <button
                        key={type}
                        className={`btn mx-2 ${filter === type ? 'btn-dark text-white' : 'btn-secondary text-white'}`}
                        onClick={() => setFilter(type)}
                    >
                        {type === 'all' ? 'Todos' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="text-center text-danger">
                    <p>{error}</p>
                    <button className="btn btn-secondary" onClick={() => window.location.reload()}>
                        Tentar Novamente
                    </button>
                </div>
            ) : filteredRepos.length === 0 ? (
                <div className="text-center text-muted">
                    <p>Nenhum projeto encontrado para essa categoria.</p>
                </div>
            ) : (
                <div className="row">
                    {filteredRepos.map(repo => (
                        <div key={repo.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{repo.name}</h5>
                                    <p className="card-text">{repo.description || "Sem descrição"}</p>
                                    <a href={repo.html_url} className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                                        Ver no GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;