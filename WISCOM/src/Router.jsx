import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import Main from './page/Main';
import Guestbook from './page/Guestbook';
import Project from './page/Project';
import Developer from './page/Developer';
import Map from './page/Map';
import Nav from './components/common/Nav/Nav';
import Footer from './components/common/Footer/Footer';

function AppNavigation() {
  const location = useLocation();

  // 메인 페이지에서만 네비게이션 숨김
  if (location.pathname === '/') {
    return (
      <>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </>
    );
  }
  // 다른 페이지에서는 네비게이션 표시
  return (
    <>
      <Nav />
      <GlobalWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/map" element={<Map />} />
          <Route path="/project/:post_id" element={<Project />} />
          <Route path="/developer" element={<Developer />} />
        </Routes>
      </GlobalWrapper>
      <Footer />
    </>
  );
}

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <AppNavigation />
      </BrowserRouter>
    </>
  );
}

const GlobalWrapper = styled.main`
  @media screen and (min-width: 834px) {
    padding: 4rem;
  }
  @media screen and (max-width: 833px) {
    padding: 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 2rem;
  }
`;
