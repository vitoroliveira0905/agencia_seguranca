"use client";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Sobre() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card  d-flex m-5" style={{ Width: 100 }}>
        <div className="row g-0">
          <div className="col-md-4 col-12">
            <img src="./img/empresa.png" className="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="..." />
          </div>
          <div className="col-md-8" style={{background: '#172e50', color:'white'}}>
            <div className="card-body">
              <h3 className="card-title">Sobre Nós</h3>
              <p className="card-text">
                A <strong>Sentinel Security</strong> é uma empresa especializada em segurança privada e patrimonial, comprometida em proteger o que mais importa para você: sua família, seu patrimônio e seu negócio.
                Com uma equipe altamente treinada e tecnologia de ponta, oferecemos soluções completas em monitoramento, vigilância e controle de acesso, garantindo tranquilidade e confiança a todos os nossos clientes.
                <h3 className="card-title2 mt-5">Nossa Missão</h3>
                <p>Proporcionar <strong>segurança com excelência</strong>, atuando de forma preventiva e eficiente, com profissionais capacitados e comprometidos com a ética e o respeito.</p>
                <div className="mini-pai mt-5">
                  <p className="text-mini">
                    <strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
                    </svg> Comprometimento</strong>: cada cliente é prioridade.
                  </p>
                  <p className="text-mini">
                    <strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
                    </svg> Confiança</strong>: base de todas as nossas relações.
                  </p>
                  <p className="text-mini">
                    <strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
                    </svg> Responsabilidade</strong>: trabalhamos com seriedade e transparência.
                  </p>
                  <p className="text-mini">
                    <strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
                    </svg> Inovação</strong>: utilizamos as melhores tecnologias do mercado.
                  </p>
                  <p className="text-mini">
                    <strong><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-record-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
                    </svg> Profissionalismo</strong>: equipe qualificada e constantemente treinada.
                  </p>
                </div>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}


