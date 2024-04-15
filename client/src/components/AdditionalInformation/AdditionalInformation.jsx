import { useState } from "react";

import "./AdditionalInformation1.css";
import FunFacts from "../../BDD/FunFacts";

function AdditionalInformation() {
  const randomIndex = Math.floor(Math.random() * FunFacts.length);
  const [containerIndex, setContainerIndex] = useState(0);

  const information = [
    {
      title: "Did you know",
      text: FunFacts[randomIndex],
    },
    {
      title: "What to wear?",
      text: "clothes",
    },
    {
      title: "What to do?",
      text: "stuff",
    },
  ];

// Modification de l'index du tableau Information en fonction du bouton
  const handleClick = (event) => {
    const infoIndex = parseInt(event.currentTarget.value, 10);
    setContainerIndex(infoIndex);
  };

  return (
    <div className="globalInformationcontainer">
      <div className="informationContainer">
        <div className="menu">
          <ul className="menulist">
            <li className="menuicon">
              <button value="1" onClick={handleClick} type="submit">
                <img src="src/assets/images/rocketman_cloth.svg" alt="cloth" />
              </button>
            </li>
            <li className="menuicon">
              <button value="2" onClick={handleClick} type="submit">
                <img src="src/assets/images/activity.svg" alt="activity" />
              </button>
            </li>
            <li className="menuicon">
              <button value="0" onClick={handleClick} type="submit">
                <img src="src/assets/images/average.svg" alt="funFact" />
              </button>
            </li>
          </ul>
        </div>

        <div className="textContainer">
          <h3 className="additionalh3">{information [containerIndex].title}</h3>
          <p className="additionalp">{information [containerIndex].text}</p>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInformation;
