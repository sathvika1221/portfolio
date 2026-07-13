import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url) {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "contain",
            borderRadius: "10px",
            marginBottom: "15px"
          }}
        />
      </div>

      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>

        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.subtitle}
        </p>
      </div>

      <div className="certificate-card-footer">
        {cardInfo.footerLink &&
          cardInfo.footerLink.map((link, index) => (
            <span
              key={index}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(link.url)}
            >
              {link.name}
            </span>
          ))}
      </div>
    </div>
  );
}