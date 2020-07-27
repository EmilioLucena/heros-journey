import React from "react";

import "./StepCard.css";
import journeyCardImg from "../images/The Heroins Learning Journey.jpg";

export default function StepCard({ course, name, step, stage, quadrant }) {
  const classToShow = "StepCard-Box StepCard-Box-" + quadrant;
  return (
    <div className={classToShow}>
      <div className="StepCard-Left">
        <span>
          Course: <span className="span-data">{course}</span>
        </span>
        <span>
          Name: <span className="span-data">{name}</span>
        </span>
      </div>
      <img
        src={journeyCardImg}
        className="StepCard-Img"
        alt="the heroins learning journey"
      />
      <div className="StepCard-Right">
        <span>
          Step: <span className="span-data">{step}</span>
        </span>
        <span>
          Stage: <span className="span-data">{stage}</span>
        </span>
      </div>
    </div>
  );
}
