import React, { useState } from "react";
import "./accordion.css";

const Accordion = ({
  title,
  content,
  content2,
  content3,
  content4,
  content5,
  linkTitle,
  linkTitle2,
  link,
  link2
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div style={{ fontSize: "20px" }}>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
      {isActive && <div className="accordion-content">{content2}</div>}
      {isActive && <div className="accordion-content">{content3}</div>}
      {isActive && <div className="accordion-content">{content4}</div>}
      {isActive && <div className="accordion-content">{content5}</div>}
      {isActive && (
        <div className="link-content">
          <a href={link} rel="noreferrer" target="_blank">
            {linkTitle}
          </a>
        </div>
      )}
      {isActive && (
        <div className="link-content">
          <a href={link2} rel="noreferrer" target="_blank">
            {linkTitle2}
          </a>
        </div>
      )}
    </div>
  );
};

export default Accordion;
