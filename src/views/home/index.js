import React from "react";
import './home.css';
import Background from '../../assets/images/background-home.png';
import DiscordImage from '../../assets/images/discord.png';
import TeamImage from '../../assets/images/multiple-users-silhouette.png';
import GithubImage from '../../assets/images/github-image.png';

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content" style={{background: `url(${Background}) right/cover`}}>
      <div className="shell-left">
        <div className="text-left-home">
          <h1 className="title-home">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="divider back-blue"></div>
          <p className="secondary-text-home">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </p>
        </div>
        <div className="buttons-left-home">
          <Link>
            <img src={DiscordImage}></img>
          </Link>
          <Link>
            <img src={TeamImage}></img>
          </Link>
          <Link>
            <img src={GithubImage}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
