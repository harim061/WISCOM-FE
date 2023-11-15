import styled from 'styled-components';
import WorkInfo from '../components/Project/WorkInfo';
import IntroWork from '../components/Project/IntroWork';
import ImageSlider from '../components/Project/ImageSlider';
import Developer from '../components/Project/Developer';
import Likes from '../components/Project/Likes';
import Comment from '../components/Project/Comment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Project() {
  const [data, setData] = useState(null);
  const { post_id } = useParams();

  useEffect(() => {
    const nextPostId = Number(post_id) + 1;
    // 정적 URL을 사용하여 데이터를 가져옵니다.
    fetch(`https://wiscom2023.store/posts/${nextPostId}/`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log('가져와짐'); // 데이터를 성공적으로 가져온 후에 로깅
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [post_id]);

  return (
    <ProjectWrapper>
      <WorkInfo data={data} />
      <IntroWork data={data} />
      <ImageSlider data={data} />
      <Developer data={data} />
      <Likes id={post_id} />
      <Comment id={post_id} />
    </ProjectWrapper>
  );
}

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 319.9px) {
    display: none;
  }
`;
