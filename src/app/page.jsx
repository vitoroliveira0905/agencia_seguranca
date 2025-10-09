import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const produtos = [
    {
      titulo: "Segurança Para Eventos",
      descricao: "Garanta a segurança do seu evento com nossa equipe especializada em grandes públicos, atuando no controle de acesso, prevenção de incidentes e proteção de convidados.",
      link: "https://res2.weblium.site/res/weblium/5c8a7fa9530a1f0025da5ef6_optimized_1395_c1395x931-0x0.webp",
      tags: ["Segurança", "Privado", "Comunicação"]
    },
    {
      titulo: "Escolta",
      descricao: "Proteja cargas e pessoas com nossa equipe especializada em escolta 24h, com profissionais treinados, viaturas equipadas e monitoramento em tempo real.",
      link: "https://res2.weblium.site/res/weblium/5c89f8b83cc5ff0024ef0750_optimized_1395.webp",
      tags: ["Segurança", "Blindado", "Escolta"]
    },
    {
      titulo: "Monitoramento Online",
      descricao: "Proteja seu patrimônio 24h com nosso monitoramento remoto, câmeras de alta resolução, sensores inteligentes e resposta imediata a qualquer ocorrência.",
      link: "https://res2.weblium.site/res/weblium/5c8a2bc7bd85da00254918af_optimized_1396_c1396x930-0x0.webp",
      tags: ["Segurança", "Propiedade", "Online"]
    }
  ];

  return (
    <>
      <main className="mb-5">
        <div className="banner w-100">
          <img src="/img/banner1.png" className="w-100"></img>
          <div className="banner-secao">
            
          </div>
        </div>

        
        <section className="container py-5 my-5">
  <h1 className="text-center mb-5 fw-bold">Sentinel Security</h1>

  <div className="row align-items-start">

    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
      <img
        src="https://res2.weblium.site/res/weblium/5c8a2bf61541e40024d92142_optimized_1395_c1395x931-0x0.webp"
        alt="Imagem Principal"
        className="img-fluid rounded shadow"
      />
    </div>

  
    <div className="col-12 col-lg-6 d-flex flex-column">
      <p className="fst-italic fs-5">
        Na <strong>Sentinel Security</strong>, oferecemos soluções completas em segurança patrimonial, empresarial e pessoal. 
        Com tecnologia de ponta e uma equipe altamente treinada, garantimos tranquilidade, confiança e proteção 24 horas por dia.
      </p>

      <ul className="list-unstyled mb-4 mt-3">
        <li className="mb-2">
          <i className="bi bi-list-check me-2 text-danger"></i>Monitoramento 24/7
        </li>
        <li className="mb-2">
          <i className="bi bi-list-check me-2 text-danger"></i>Equipe treinada e certificada
        </li>
        <li className="mb-2">
          <i className="bi bi-list-check me-2 text-danger"></i>Tecnologia de ponta
        </li>
      </ul>

      <div className="mt-auto">
        <button className="btn btn-danger btn-lg">Saiba Mais</button>
      </div>
    </div>
  </div>
</section>




        


        <section className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Serviços que Oferecemos</h2>

        <div className="row g-4 ">
          {produtos.map((produto, index) => (
            <div className="col-md-4" key={index}>
           
              <Card 
         
         link={produto.link}
         titulo={produto.titulo}
         descricao={produto.descricao}
         tags={produto.tags}
            /></div>
        
          ))}
        </div>
      </section>
      </main>

    </>
  );

}
