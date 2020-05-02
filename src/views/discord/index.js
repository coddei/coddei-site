import React from "react";
import "./discord.css";
import ArrowRight from '../../assets/images/arrow-right.svg'
import { Link } from "react-router-dom";

export default function DiscordPage() {
  return (
    <div className="content" id="discord-content">
      <div className="shell-left-discord">
        <div className="text-left-discord">
          <h1 className="title-discord">
            junte-se ao<br></br>nosso discord :)
          </h1>
          <div className="divider back-blue"></div>
          <p className="secondary-text-discord">
            Faça parte de uma comunidade focada em ajudar o próximo, tire
            dúvidas, ajude outros usuários a resolver problemas ou divulgue suas
            artes, tudo isso em um só servidor <span role="img">🤩</span>
          </p>
          <a href="https://discord.gg/c994NVE"><button className="discordButton">Vamos Lá!<img src={ArrowRight} alt=""/></button></a>
        </div>
      </div>
    </div>
  );
}
