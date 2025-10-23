
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    const servicos = [
        {
            id: 1,
            titulo: "Segurança Para Eventos",
            descricao: "Garanta a segurança do seu evento com nossa equipe especializada em grandes públicos, atuando no controle de acesso, prevenção de incidentes e proteção de convidados.",
            link: "https://res2.weblium.site/res/weblium/5c8a7fa9530a1f0025da5ef6_optimized_1395_c1395x931-0x0.webp",
            tags: ["Segurança", "Privado", "Comunicação"]
        },
        {
            id: 2,
            titulo: "Escolta",
            descricao: "Proteja cargas e pessoas com nossa equipe especializada em escolta 24h, com profissionais treinados, viaturas equipadas e monitoramento em tempo real.",
            img: "./img",
            tags: ["Segurança", "Blindado", "Escolta"]
        },
        {
            id: 3,
            titulo: "Monitoramento Online",
            descricao: "Proteja seu patrimônio 24h com nosso monitoramento remoto, câmeras de alta resolução, sensores inteligentes e resposta imediata a qualquer ocorrência.",
            link: "https://res2.weblium.site/res/weblium/5c8a2bc7bd85da00254918af_optimized_1396_c1396x930-0x0.webp",
            tags: ["Segurança", "Propiedade", "Online"]
        }
    ];

    return (
        <>
            <main
                className="d-flex flex-direction-column justify-content-center align-items-center py-5"
                style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row w-100 d-flex justify-content-center">
                        <form className="col-md-6 col-10 g-5 custom-form p-5">
                            <div className="mb-3">
                                <label htmlFor="inputNome" className="form-label">
                                    Produto
                                </label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    id="inputNome"

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputCategoria" className="form-label">
                                    Categoria
                                </label>
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    id="inputCategoria"

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPreco" className="form-label">
                                    Preço
                                </label>
                                <input type="number"
                                    className="form-control custom-input"
                                    id="inputPreco"

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputDescricao" className="form-label">
                                    Descrição
                                </label>
                                <input type="text"
                                    className="form-control custom-input custom-input"
                                    id="inputDescricao"

                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="inputImagem" className="form-label">
                                    Imagem
                                </label>
                                <input type="text"
                                    className="form-control custom-input"
                                    id="inputImagem"

                                />
                            </div>

                            <div className="w-100 d-flex justify-content-center">
                                <button type="submit" className="btn btn-danger m-3" style={{ width: "100px" }}>
                                    Adicionar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </main>

            <section className="w-100 p-5" style={{ backgroundColor: "var(--section-background)" }}>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-8 p-0">
                            <iframe
                                className="map w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.794292397156!2d-46.65657198538472!3d-23.580068768562907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c63dbe74d5%3A0x2d5c02a8d0d080df!2sPaulista!5e0!3m2!1spt-BR!2sbr!4v1691580000000!5m2!1spt-BR!2sbr"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="col-md-4 barra-lateral">
                            <form className="mb-3">
                                <input
                                    type="text"
                                    className="form-control custom-input text-light"
                                    placeholder="Buscar loja..."
                                />
                            </form>
                            <ul className="list-group ">
                                <li className="list-group-item p-4 text-light " style={{ backgroundColor: "#0b192c", border: "none" }}>
                                    Rua das Palmeiras, 482 – Jardim América, São Paulo – SP, 01427-000
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "#0b192c", border: "none" }}>
                                    Avenida Atlântica, 1901 – Copacabana, Rio de Janeiro – RJ, 22021-001
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "#0b192c", border: "none" }}>
                                    Rua das Flores, 75 – Centro, Curitiba – PR, 80020-090
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "#0b192c", border: "none" }}>
                                    Avenida Brasil, 3260 – Funcionários, Belo Horizonte – MG, 30140-002
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "#0b192c", border: "none", border: "none" }}>
                                    Rua Dom Pedro II, 210 – Centro, Porto Alegre – RS, 90010-050
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "#0b192c" }}>
                                    Rua Bahia, 1345 – Savassi, Belo Horizonte – MG, 30160-011
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "#0b192c", border: "none" }}>
                                    Alameda Santos, 999 – Cerqueira César, São Paulo – SP, 01419-001
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "#0b192c", border: "none" }}>
                                    Rua XV de Novembro, 404 – Centro, Florianópolis – SC, 88010-400
                                </li>
                                <li className="list-group-item p-4 text-light" style={{ backgroundColor: "#0b192c", border: "none" }}>
                                    Avenida Sete de Setembro, 1870 – Centro, Salvador – BA, 40060-002
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );

}
