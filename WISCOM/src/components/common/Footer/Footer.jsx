import * as F from './FooterStyle';

const prof = ['박우창', '이주영', '최승훈', '유견아', '이경미'];

const developers = [
  '강현정',
  '고민정',
  '김다희',
  '김서영',
  '김수민',
  '김수빈',
  '김수현',
  '김지현',
  '김하연',
  '김현지',
  '노윤하',
  '문서연',
  '박고은',
  '박소연',
  '박지혜',
  '박지호',
  '박효정',
  '배은빈',
  '서채은',
  '손가영',
  '신지현',
  '우⠀ 주',
  '윤소연',
  '윤소원',
  '윤이솔',
  '이동희',
  '이민영',
  '이소현',
  '이수민',
  '이슬영',
  '이예원',
  '이재현',
  '이지선',
  '이혜림',
  '임다희',
  '임예진',
  '장다은',
  '장지수',
  '정윤현',
  '정해인',
  '조다은',
  '조선아',
  '조수인',
  '조예진',
  '채현영',
  '최지영',
  '한성현',
  '한유진',
  '홍정민',
];

const junior = ['김가빈', '김지민', '김채현', '박소이', '오세은', '한수정'];
const sophomore = ['김은서', '김희원', '박효진', '이채은', '조수민', '최유리', '황민지'];

const gap = { paddingBottom: '6rem' };

const Footer = () => {
  return (
    <F.FooterWrapper>
      <F.FooterTitle>2023 덕성여자대학교 컴퓨터공학 전공 제33회 졸업전시회 WISCOM</F.FooterTitle>
      <F.Box>
        <F.Category>지도교수</F.Category>
        <F.Names>
          {prof.map((developer, index) => (
            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
          ))}
        </F.Names>
      </F.Box>
      <F.Box>
        <F.Category>개발자</F.Category>
        <F.Names>
          {developers.map((developer, index) => (
            <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
          ))}
        </F.Names>
      </F.Box>
      <F.Box>
        <F.Category>졸업전시 준비위원회</F.Category>
        <F.Area>
          <F.Names>
            <F.NameEach>
              <div>위원장 노하림</div>
            </F.NameEach>
            <div style={gap}></div>
          </F.Names>
          <F.Names>
            {junior.map((developer, index) => (
              <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
            ))}
          </F.Names>
          <F.Names>
            {sophomore.map((developer, index) => (
              <F.NameEach key={index}>{developer} &nbsp;</F.NameEach>
            ))}
          </F.Names>
        </F.Area>
      </F.Box>

      <F.InfoContainer>
        <F.Info>서울 도봉구 삼양로144길 33 덕성여자대학교 과학기술대학 컴퓨터공학전공 </F.Info>
        <F.Info>TEL 02-901-8341</F.Info>
        <F.Info> Copyright (c) Computer Language and Literature. All right reserved.</F.Info>
      </F.InfoContainer>
    </F.FooterWrapper>
  );
};

export default Footer;
