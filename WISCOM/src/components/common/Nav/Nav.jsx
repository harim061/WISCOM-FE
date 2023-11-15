import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as N from './NavStyle';
import NavList from './NavList';

const Nav = () => {
  const [Title, setTitle] = useState('');
  const location = useLocation(null);

  const pathToTitleMapping = {
    '/': 'MAIN',
    '/map': 'PROJECT',
    '/guestbook': 'GUESTBOOK',
    '/chatbot': 'CHATBOT',
    '/developer': 'DEVELOPER',
  };

  const TeamList = [
    'HATCH',
    'DRAKE',
    'HIGHFIVE',
    '딱꼼',
    'IDEAL',
    '내마음을UNLOCK',
    '클래스메이트',
    '한울',
    '한소리',
    '사현희있어요',
    'AFORE',
  ];

  useEffect(() => {
    if (location.pathname.includes('/project/')) {
      setTitle('PROJECT');
    } else {
      setTitle(pathToTitleMapping[location.pathname] || '');
    }
  }, [location.pathname]);

  const onClickPrj = (index) => {
    window.location.pathname = `/project/${index}`;
  };

  return (
    <N.NavWrapper>
      <N.NavContent>
        <N.NavTag href="/">MAIN</N.NavTag>
        <N.NavTag href="/map">PROJECT</N.NavTag>
        <N.NavTag href="/guestbook">GUESTBOOK</N.NavTag>
        <N.NavTag href="/developer">DEVELOPER</N.NavTag>
        <N.NavTag href="https://pf.kakao.com/_wymuG/chat" target="_blank">
          CHAT
        </N.NavTag>
        <NavList />
      </N.NavContent>

      <N.LogoImg>
        <N.Text>{Title}</N.Text>
      </N.LogoImg>

      {(location.pathname === '/map' || location.pathname.includes('project')) && (
        <N.TeamWrapper>
          <N.TeamContent>
            {TeamList.map((team, index) => (
              <N.TeamName key={index} onClick={() => onClickPrj(index)}>
                {team}
              </N.TeamName>
            ))}
          </N.TeamContent>
          <N.Click>Click The Project</N.Click>
        </N.TeamWrapper>
      )}
    </N.NavWrapper>
  );
};

export default Nav;
