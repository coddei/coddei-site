import React from "react";
import './card-sobre.css'
import GitBackground from "../../assets/images/github-button-background.png"
import LinkedinBackground from "../../assets/images/linkedin-background.png"
import PortfolioBackground from "../../assets/images/portfolio-background.png"
export default function CardSobre({
  name,
  nickname,
  profilePic,
  type,
  email,
  text,
  links,
}) {
  return (
    <>
      <div className="card">
        <div
          className="profile-card-sobre"
          style={{ background: `url(${profilePic}) center/cover` }}
        ></div>
        <div className="shell-name">
          <div className="name-card"><strong>{name}</strong></div>
          <div className="nickname">{nickname}</div>
        </div>
        <div className="shell-text-card">
          <h3 className="type-card">{type}</h3>
          <div className="shell-email"><span class="material-icons icon-card">email</span><span class="email-card">{email}</span></div>
          <p className="text-card">{text}</p>
        </div>
        <div className="shell-card-actions">
          <a href={links[0]}><div className="action-card" id="action-git" style={{background: `url(${GitBackground}) center/cover`}}></div></a>
          <a href={links[1]}><div className="action-card" id="action-linkedin" style={{background: `url(${LinkedinBackground}) center/cover`}}></div></a>
          <a href={links[2]}><div className="action-card" id="action-portfolio" style={{background: `url(${PortfolioBackground}) center/cover`}}></div></a>
        </div>
      </div>
    </>
  );
}
