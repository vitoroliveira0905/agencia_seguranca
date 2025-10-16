"use client";

import { useParams, useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ServicoIndividual() {
  const { id } = useParams(); 
  const router = useRouter();

  const servicos = {
    1: {
      nome: "Segurança Para Eventos",
      descricao:
        "Garantimos a segurança completa do seu evento, desde o controle de acesso até a proteção de convidados.",
      detalhes: [
        "Equipe uniformizada e treinada para grandes públicos",
        "Prevenção de incidentes e controle de acesso",
        "Comunicação via rádio e suporte em tempo real",
        "Planejamento estratégico de segurança",
      ],
      tags: ["Patrimonial", "Eventos", "Monitoramento"],
      imagem:
       "../img/Seguranca_eventos.jpg",
    },
    2: {
      nome: "Escolta",
      descricao:
        "Proteja cargas e pessoas com nossos profissionais altamente treinados e monitoramento 24h.",
      detalhes: [
        "Escolta armada e desarmada",
        "Monitoramento em tempo real via GPS",
        "Viaturas rastreadas e equipe tática",
        "Relatórios automáticos de segurança",
      ],
      tags: ["Segurança", "Blindado", "24h"],
      imagem:
      "../img/guarda-costas.webp",
    },
    3: {
      nome: "Monitoramento Online",
      descricao:
        "Monitoramento remoto com câmeras de alta resolução e resposta imediata a qualquer ocorrência.",
      detalhes: [
        "Central própria 24/7",
        "Câmeras inteligentes e sensores avançados",
        "Acompanhamento em tempo real",
        "Relatórios e notificações automáticas",
      ],
      tags: ["Online", "Tecnologia", "Proteção"],
      imagem:
      "../img/Camera_Seguranca.jpeg",
    },
  };

  const servico = servicos[Number(id)];

  if (!servico) {
    return (
      <div className="text-light text-center mt-5">
        <h3>Serviço não encontrado 😕</h3>
        
      </div>
    );
  }

  return (
    <main
      className="d-flex flex-direction-column justify-content-center align-items-center py-5"
      style={{ minHeight: "100vh" }}
    >




      <div className="container">
        <div className="card shadow-lg border-0 rounded-4 overflow-hidden bg-dark text-light">
          <div className="row g-0">
    
            <div className="col-md-5">
              <img
                src={servico.imagem}
                alt={servico.nome}
                className="img-fluid h-100 w-100 object-fit-cover"
                style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
              />
            </div>


            <div className="col-md-7">
              <div className="card-body d-flex flex-column h-100">
                <h2 className="text-danger fw-bold">{servico.nome}</h2>
                <p className="mb-3 fs-5">{servico.descricao}</p>

                <div className="mb-3">
                  {servico.tags.map((tag, idx) => (
                    <span key={idx} className="badge bg-danger me-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="list-unstyled mb-4">
                  {servico.detalhes.map((item, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-danger me-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto text-center">
                  <button className="btn btn-danger btn-lg px-5 rounded-pill shadow-sm">
                    Confirmar Aquisição
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
