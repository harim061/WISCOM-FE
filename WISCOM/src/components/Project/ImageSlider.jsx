import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as I from './ImageSliderStyle';
import LeftArrow from '../../img/Project/RightArrow.svg';
import RightArrow from '../../img/Project/RightArrow.svg';
import LeftArrowHover from '../../img/Project/RightArrowHover.svg';
import RightArrowHover from '../../img/Project/RightArrowHover.svg';

const ImageSlider = () => {
  const [data, setData] = useState(null);
  const { post_id } = useParams();
  const [slideImages, setSlideImages] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLeftArrowHovered, setIsLeftArrowHovered] = useState(false);
  const [isRightArrowHovered, setIsRightArrowHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // 추가: 일시 정지 상태

  const handleLeftArrowMouseEnter = () => {
    setIsLeftArrowHovered(true);
  };

  const handleLeftArrowMouseLeave = () => {
    setIsLeftArrowHovered(false);
  };

  const handleRightArrowMouseEnter = () => {
    setIsRightArrowHovered(true);
  };

  const handleRightArrowMouseLeave = () => {
    setIsRightArrowHovered(false);
  };

  const preSlide = () => {
    setCurrentIdx((preIdx) => (preIdx - 1 + slideImages.length) % slideImages.length);
  };

  const nextSlide = () => {
    setCurrentIdx((preIdx) => (preIdx + 1) % slideImages.length);
  };

  const togglePause = () => {
    setIsPaused((paused) => !paused); // 클릭할 때마다 일시 정지/재생!
  };

  useEffect(() => {
    const nextPostId = Number(post_id) + 1;
    fetch(`https://wiscom2023.store/posts/${nextPostId}/`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setSlideImages(data.images);
      })
      .catch((error) => console.error('데이터 가져오기 오류:', error));
  }, [post_id]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [currentIdx, slideImages.length, isPaused]);

  return (
    <I.ImageSliderContainer>
      {data && (
        <>
          <I.PreArrow
            onClick={preSlide}
            onMouseEnter={handleLeftArrowMouseEnter}
            onMouseLeave={handleLeftArrowMouseLeave}>
            <img src={isLeftArrowHovered ? LeftArrowHover : LeftArrow} alt="Previous" />
          </I.PreArrow>
          <I.SliderBannerWrap onClick={togglePause}>
            {' '}
            {/* 추가: 클릭할 때 일시 정지/재생 토글 */}
            <I.SlideBanner>
              {slideImages.map((image, index) => (
                <I.BannerImage
                  key={index}
                  className={`${index === currentIdx ? 'active' : ''}`}
                  src={`https://wiscom2023.store/${image}`}
                  alt={`slide ${index}`}
                />
              ))}
            </I.SlideBanner>
          </I.SliderBannerWrap>
          <I.NextArrow
            onClick={nextSlide}
            onMouseEnter={handleRightArrowMouseEnter}
            onMouseLeave={handleRightArrowMouseLeave}>
            <img src={isRightArrowHovered ? RightArrowHover : RightArrow} alt="Next" />
          </I.NextArrow>
        </>
      )}
    </I.ImageSliderContainer>
  );
};

export default ImageSlider;
