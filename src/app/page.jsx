import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const produtos = [
    {
      titulo: "Segurança Para Eventos",
      descricao: "Atuamos em grandes eventos garantindo segurança e comforto para todos, contamos com Profissionais especializados, comunicação externa e organização",
      link: "https://www.organizandoeventos.com.br/artigos/agencia-de-seguranca-para-eventos-preco.jpg",
      tags: ["Segurança", "Privado", "Comunicação"]
    },
    {
      titulo: "Escolta",
      descricao: "Se locomova por toda cidade com segurança realizada por esolta, motoristas profissionais e carros altamente Blindados",
      link: "https://res2.weblium.site/res/weblium/5c89f8b83cc5ff0024ef0750_optimized_1395.webp",
      tags: ["Segurança", "Blindado", "Esco"]
    },
    {
      titulo: "Monitoramento Online",
      descricao: "Foi viajar e está com receio de deixar sua propiedade vazia?? Esse é o serviço perfeito para você!!! Contamos com um monitoramento por câmeras com serviços 24 horas, alarmes extremamente senssíveis e até câo de guarda",
      link: "https://res2.weblium.site/res/weblium/5c8a2bc7bd85da00254918af_optimized_1396_c1396x930-0x0.webp",
      tags: ["Segurança", "Propiedade", "Online"]
    }
  ];

  return (
    <>
      <main>
        <div className="banner w-100">
          <img src="/img/banner.png" className="w-100"></img>
          <div className="banner-secao">
            <h1>Sentinel Security</h1>
          </div>
        </div>


        <section className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Serviços que Oferecemos</h2>

        <div className="row g-4">
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
