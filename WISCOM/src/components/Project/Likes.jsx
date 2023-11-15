import React, { useState, useEffect } from 'react';
import likeImg from '../../img/Project/likes.svg';
import likedImg from '../../img/Project/liked.svg';
import * as L from './LikesStyle';
import axios from 'axios';

const Likes = (post_id) => {
  const nextPostId = Number(post_id.id) + 1;
  const [data, setData] = useState('');
  const [likes, setLikes] = useState(0);
  const [isLike, setIsLike] = useState(likeImg);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    if (isLike === likeImg) {
      setIsLike(likedImg);
      sendLike();
    } else {
      alert('이미 좋아요를 눌렀습니다.');
    }
  };
  useEffect(() => {
    getDatas();
  }, []);
  const getDatas = async () => {
    await axios
      .get(`https://wiscom2023.store/posts/${nextPostId}/like`)
      .then((response) => {
        setData(response.data);
        console.log('성공');
        console.log(response.data);
      })
      .catch((error) => {
        console.log('좋아요 조회 실패', error);
      });
    console.log(data);
  };
  const sendLike = async () => {
    await axios
      .get(`https://wiscom2023.store/posts/${nextPostId}/like/add`)
      .then((response) => {
        setData(response.data);
        console.log(response.data.message);
        if (response.data.message === '좋아요를 누름') {
          setIsLike(likedImg);
        }
        console.log('성공');
      })
      .catch((error) => {
        console.log('좋아요 실패', error);
      });
    console.log(data);
  };
  return (
    <L.LikesWrapper>
      <L.LikesImg src={isLike} alt="image" onClick={handleLikeClick} />
      <L.LikesSpan>{data && data.likes}</L.LikesSpan>
    </L.LikesWrapper>
  );
};

export default Likes;
