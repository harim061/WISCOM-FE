import React, { useEffect, useState } from 'react';
import * as MP from './ProjectListStyle';

export default function ProjectList() {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const TeamList = [
    { team: 'HATCH', service: 'Pocket Pose : PoPo' },
    { team: 'DRAKE', service: 'FREN:SEND' },
    { team: 'HIGHFIVE', service: '아트어리' },
    { team: '딱꼼', service: '어댄고(Urdango)' },
    { team: 'IDEAL', service: 'DUK TO ME' },
    { team: '내마음을UNLOCK', service: 'UNLOCK' },
    { team: '클래스메이트', service: 'SchoolLog' },
    { team: '한울', service: 'We:Lover' },
    { team: '한소리', service: '실록 샐록' },
    { team: '사현희있어요', service: '라-이터' },
    { team: 'AFORE', service: 'Fairy Tale' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamIndex((prevIndex) => (prevIndex + 1) % TeamList.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const onClickPrj = (index) => {
    window.location.href = `project/${index}`;
  };
  return (
    <>
      <MP.ListWrapper>
        {TeamList.map(({ team, service }, index) => (
          <MP.Team
            key={team}
            onClick={() => onClickPrj(index)}
            style={{
              color: activeTeamIndex === index ? '#7ce06b' : 'black',
            }}>
            {String(index + 1).padStart(2, '0')}.{team} - {service}
          </MP.Team>
        ))}
      </MP.ListWrapper>
    </>
  );
}
