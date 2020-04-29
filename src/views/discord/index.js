import React from "react";
import "./discord.css";
import DiscordImage from "../../assets/images/discord.png";
import TeamImage from "../../assets/images/multiple-users-silhouette.png";
import GithubImage from "../../assets/images/github-image.png";

import { Link } from "react-router-dom";

export default function DiscordPage() {
  return (
    <div className="content" id="discord-content">
      <div className="shell-left">
        <div className="text-left-discord">
          <h1 className="title-discord">
            junte-se ao<br></br>nosso discord :)
          </h1>
          <div className="divider back-blue"></div>
          <p className="secondary-text-discord">
            Faça parte de uma comunidade focada em ajudar o próximo, tire
            dúvidas, ajude outros usuários a resolver problemas ou divulgue suas
            artes, tudo isso em um só servidor 🤩
          </p>
        </div>
      </div>
    </div>
  );
}
