import React, { useState } from "react";

import ImageMapper from "react-image-mapper";

import "./Journey.css";

import StepCard from "./StepCard";

export default function Journey({ journeys, image, areas }) {
  const imageWidth = 704;
  const imageHeight = 528;

  const [inside, setInside] = useState(false);
  const [entry, setEntry] = useState(null);
  const [quadrant, setQuadrant] = useState(1);

  const enterArea = (area) => {
    setInside(true);
    console.log(area);
    console.log("Journey =" + journeys);
    setEntry(journeys[Number(area._id)]);
    setQuadrant(area.quadrant);
  };

  const descriptionClass = "Journey-Description-" + quadrant;
  return (
    <div className="Journey">
      <ImageMapper
        width={imageWidth}
        height={imageHeight}
        src={image}
        map={areas}
        onMouseEnter={(area) => enterArea(area)}
      />
      {inside && (
        <>
          <StepCard
            course={entry.course}
            name={entry.name}
            step={entry.step}
            stage={entry.stage}
            quadrant={quadrant}
          />
          <div style={{ padding: "5px" }} className={descriptionClass}>
            {entry.description}
          </div>
        </>
      )}
    </div>
  );
}
