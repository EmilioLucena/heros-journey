import React, { useEffect, useState } from "react";

import journeyImage from "./images/the-Heroines-Journey-map-1024x770.jpg";

import { journeyAreas, quadrantToShow } from "./helpers/journeyAreas";

// this is the service which connects to the json API
import httpGet from "./services/journeyService";

// image and sensitive areas
import Journey from "./components/Journey";

// we are going to read json from the API which is listening
// on por 3000 for the time being

function App() {
  const [journey, setJourney] = useState([]);

  useEffect(() => {
    const loadJourney = async () => {
      try {
        const res = await httpGet();
        setJourney(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadJourney();
    console.log("Journey=" + journey);
  }, []);

  const journeyMap = {
    name: "journey",
    areas: journeyAreas.map((area, index) => {
      const rectArea = {
        _id: index,
        shape: "rect",
        coords: area,
        href: "",
        quadrant: quadrantToShow[index],
      };
      return rectArea;
    }),
  };

  console.log("Journey = " + journey);

  return <Journey journeys={journey} image={journeyImage} areas={journeyMap} />;
}

export default App;
