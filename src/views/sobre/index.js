import React from "react";
import "./sobre.css";

import { Link } from "react-router-dom";
import CardSobre from "../../components/card-sobre";

export default function Sobre() {
  return (
    <>
      <div className="content" id="sobre-content-top">
        <div className="shell-left-sobre">
          <div className="text-left-sobre">
            <h1 className="title-sobre">
              um time,
              <br />
              um objetivo
            </h1>
            <div className="divider-sobre back-blue"></div>
            <p className="secondary-text-sobre">
              A Coddei nasceu com o propósito de melhorar o cenário das áreas de
              desenvolvimento relacionadas a tecnologia, tentamos encontrar
              soluções para melhorar o trabalho daqueles que estão envolvidos do
              HTML ao Machine Learning. <br />
              <br />
              Na busca por esses problemas e soluções criamos um servidor no
              Discord para discutir programação, mas já existe planos de
              expansão com o desenvolvimento de produtos voltados para as mesmas
              áreas do propósito de nascimento.
            </p>
          </div>
        </div>
      </div>
      <div className="content" id="sobre-content-bottom">
        <div className="shell-text-bottom">
        <div className="text-left-sobre-bottom">
          <h1 className="title-sobre-bottom">QUEM CONSTROI O CODDEI?</h1>
          <div className="divider-sobre back-blue"></div>
        </div>
        </div>
        <div className="shell-cards">
          <CardSobre
            name={"Pedro Borges"}
            nickname={"azanbertre"}
            profilePic={"https://i.imgur.com/85i64Mz.png"}
            type={"Back-End Developer"}
            email={"azanbertre@coddei.com"}
            text={
              "Entusiasta da área tecnológica, atualmente desenvolvedor Full-Stack na DeeperSystems e dono da Coddei"
            }
            links={[
              "https://github.com/azanbertre",
              "https://www.linkedin.com/in/pvborges/",
              "http://azanbertre.me/",
            ]}
          />
          <CardSobre
            name={"Marcosuel Vieira"}
            nickname={"lexmarcos"}
            profilePic={"https://i.imgur.com/3jVISEi.png"}
            type={"Front-End Developer"}
            email={"lexmarcos@coddei.com"}
            text={
              "Amante de bons designs gerenciador de projetos e interfaces da Coddei e atualmente trabalhando remoto para a DeeperSystems"
            }
            links={[
              "https://github.com/lexmarcos",
              "https://www.linkedin.com/in/marcosuel-filho-363a1b10a/",
              "https://lexmarcos.github.io/",
            ]}
          />
        </div>
      </div>
    </>
  );
}
