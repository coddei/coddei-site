import React from "react";
import './home.css';
import DiscordImage from '../../assets/images/discord.png';
import TeamImage from '../../assets/images/multiple-users-silhouette.png';
import GithubImage from '../../assets/images/github-image.png';

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content" id="home-content">
      <div className="shell-left">
        <div className="text-left-home">
          <h1 className="title-home">
            Tudo começa<br/>na ideia e na programação.
          </h1>
          <div className="divider back-blue"></div>
          <p className="secondary-text-home">
            O Coddei é uma plataforma em desenvolvimento que cria soluções para
            programadores, designers experientes e também para aqueles que estão começando nessas profissões.
          </p>
        </div>
        <div className="buttons-left-home">
          <Link to="/discord">
            <img src={DiscordImage}></img>
          </Link>
          {/* <Link>
            <img src={TeamImage}></img>
          </Link> */}
          <a href="https://github.com/coddei">
            <img src={GithubImage}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
