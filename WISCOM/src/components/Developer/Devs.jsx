import * as D from './DevsStyle';
import DeveloperProfile from './DevProfile.jsx';

import BackBlue from '../../img/Developer/BackgroundBlue.svg';
import BackGreen from '../../img/Developer/BackgroundGreen.svg';
import BackYellow from '../../img/Developer/BackgroundYellow.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const backgroundImages2 = [BackBlue, BackGreen, BackYellow];

function shuffleArray(arr) {
  const shuffledArray = [...arr];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const Developer = () => {
  const [developerData, setDeveloperData] = useState([]);
  const [backgroundImages, setBackgroundImages] = useState([]);

  useEffect(() => {
    // Fetch developer data
    axios
      .get('https://wiscom2023.store/developers')
      .then((response) => {
        setDeveloperData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Generate random background images when developer data is available
    if (developerData.length > 0) {
      const shuffledImages = shuffleArray(backgroundImages2);

      const randomBackgroundImages = developerData.map((dev, index) => {
        if (index < 3) {
          return shuffledImages[index];
        } else {
          const randomIndex = Math.floor(Math.random() * 3);
          return shuffledImages[randomIndex];
        }
      });

      setBackgroundImages(randomBackgroundImages);
    }
  }, [developerData]);

  const renderDeveloperCards = () => {
    if (developerData.length === 0) {
      return null;
    }

    const developerCards = developerData.map((dev, index) => (
      <D.DeveloperContainer key={index}>
        <DeveloperProfile bg={backgroundImages[index]} image={dev.image} name={dev.name} />
      </D.DeveloperContainer>
    ));

    const rows = [];
    for (let i = 0; i < developerCards.length; i += 4) {
      const row = developerCards.slice(i, i + 4);
      rows.push(<D.Box key={i}>{row}</D.Box>);
    }

    return rows;
  };

  return <D.DevWrapper>{renderDeveloperCards()}</D.DevWrapper>;
};

export default Developer;
