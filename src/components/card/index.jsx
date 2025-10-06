import "./card.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card({ titulo, link, descricao, tags }) {
  return (

      <div className="card shadow-lg border-0 custom-card text-white">
        <img src={link || "/img/default.png"} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{titulo}</h5>
          <p className="card-text">{descricao}</p>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <button className="btn btn-custom">Adquirir</button>
          </div>

          <div className="mt-3 d-flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="badge custom-badge">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

  );
}


