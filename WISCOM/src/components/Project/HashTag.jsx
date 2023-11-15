import React, { useState, useEffect } from 'react';
import * as H from './HashTagStyle';

const HashTag = (props) => {
  //const [isClicked, setIsClicked] = useState(false);
  const { onTagClick, tagId, tagName, isSelected } = props;

  const handleTagClick = () => {
    //setIsClicked(!isClicked);
    onTagClick(tagId); // Notify the parent component about the tag click and its content
  };

  // 선택 여부에 따라 스타일 변수명 변경
  const WrapperComponent = isSelected ? H.ClickedHashTagWrapper : H.HashTagWrapper;

  return (
    <WrapperComponent onClick={handleTagClick}>
      {/* onClick={() => props.onTagClick(tagName)} */}
      {/* 배경 박스 */}

      <H.HashTagSpan>{tagName}</H.HashTagSpan>
    </WrapperComponent>
  );
};

export default HashTag;
