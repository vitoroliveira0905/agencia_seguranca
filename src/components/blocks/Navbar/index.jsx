"use client"

import Link from 'next/link'
import Image from 'next/image'
import "./navbar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react";


export default function Navbar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (

    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand logo" href="#">
            <Image
              src="/img/logo_seguranca.png"
              alt="Logotipo da Empresa"
              width={250}
              height={70}
              className='object-fit-cover'
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon navbar-dark" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link item d-flex justify-content-end pe-3" href="/">
                  Início
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item d-flex justify-content-end pe-3" href="/#servicos">
                  Serviços
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item d-flex justify-content-end pe-3" href="/Sobre">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link item d-flex justify-content-end pe-3" href="/contato">
                  Contato
                </Link>
              </li>

              <div className="icone-login">
                <li className="nav-item">
                  <Link className="nav-link item d-flex justify-content-end pe-3" href="/login">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      fill="currentColor"
                      className="bi bi-person-fill"
                      viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  );
}
