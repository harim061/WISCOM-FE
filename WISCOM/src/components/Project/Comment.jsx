import { useState, useEffect } from 'react';
import HashTag from './HashTag';
import * as C from './CommentStyle';
import axios from 'axios';

const Comment = (post_id) => {
  const nextPostId = Number(post_id.id) + 1;
  const [data, setData] = useState('');
  const [name, setName] = useState(''); //이름
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 저장하는 상태
  const [entries, setEntries] = useState([]);
  const entriesPerPage = 6; // 한 페이지에 보일 엔트리 개수
  const [selectedTags, setSelectedTags] = useState([]); //해시태그 선택
  const maxLength = 150; // 최대 글자 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    await axios
      .get(`https://wiscom2023.store/posts/${nextPostId}/comments`)
      .then((response) => {
        setData(response.data);
        console.log('성공');
        console.log(response.data);
      })
      .catch((error) => {
        console.log('전체 글 불러오기 실패', error.message);
      });
  };
  const CommentSubmit = (e) => {
    if (inputText.trim() !== '' && name.trim() !== '') {
      e.preventDefault();
      axios
        .post(`https://wiscom2023.store/posts/${nextPostId}/comments/`, {
          name: name,
          content: inputText,
          comment_tags: selectedTags,
        })
        .then((response) => {
          console.log('작성 성공');
          setName('');
          setInputText('');
          setSelectedTags('');
          getDatas();
        })
        .catch((error) => {
          console.log('작성 실패', error.message);
        });
    } else {
      // 유효하지 않은 입력 처리
      console.log('유효하지 않은 입력');
    }
  };

  const handleNameChange = (event) => {
    const name = event.target.value;
    if (name.length <= 5) {
      setName(name);
    }
  };

  const handleInputChange = (e) => {
    const content = e.target.value;
    if (content.length > maxLength) {
      setInputText(content.slice(0, maxLength));
    } else {
      setInputText(content);
    }
  };

  const handleTagClick = (tagId) => {
    setSelectedTags((prevTags) => {
      // 이미 선택된 태그를 클릭한 경우, 그 태그를 제거합니다.
      if (prevTags.includes(tagId)) {
        return prevTags.filter((tag) => tag !== tagId);
      } else {
        // 선택된 태그가 5개 미만인 경우에만 새 태그를 추가합니다.
        if (prevTags.length < 5) {
          return [...prevTags, tagId];
        } else {
          // 이미 5개의 태그가 선택되어 있으면, 사용자에게 알림을 표시합니다.
          alert('최대 5개의 해시태그만 선택할 수 있습니다.');
          return prevTags;
        }
      }
    });
  };

  const isSubmitDisabled = inputText === '' || inputText.length > maxLength || name === ''; //완료 버튼 비활성화 조건

  const tagList = [
    { id: 1, value: '신기해요' },
    { id: 2, value: '디자인이 예뻐요' },
    { id: 3, value: '완성도가 높아요' },
    { id: 4, value: '재밌어요' },
    { id: 5, value: '창의적이에요' },
    { id: 6, value: '실용적이에요' },
    { id: 7, value: '독창적이에요' },
    { id: 8, value: '디테일이 살아있어요' },
    { id: 9, value: '감동적이에요' },
    { id: 10, value: '기술이 좋아요' },
    { id: 11, value: '체계적이에요' },
    { id: 12, value: '힐링되어요' },
    { id: 13, value: '귀여워요' },
  ];

  const TagList = tagList.map((data, index) => {
    return (
      <HashTag
        tagName={data.value}
        tagId={data.id}
        key={index}
        isSelected={selectedTags.includes(data.id)}
        onTagClick={handleTagClick}
      />
    ); //onTagClick={handleTagClick}
  });
  // 현재 페이지의 댓글 배열
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = data.slice(startIndex, endIndex);

  // 페이지 이동
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <C.CommentWrapper>
      <C.CommentTextBox>
        <C.CommentTagList>{TagList}</C.CommentTagList>
        {/* name 받기 */}
        <C.CommentInput
          type="text"
          placeholder="이름을 입력해주세요" // 이름을 입력할 플레이스홀더 추가
          value={name}
          onChange={handleNameChange} // 이름을 입력하는 이벤트 핸들러 추가
        />
        <C.CommentTextArea
          placeholder="해시태그 선택 및 댓글을 작성해주세요"
          value={inputText}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
        <C.CommentCharCount>
          {inputText.length} / {maxLength}
        </C.CommentCharCount>
      </C.CommentTextBox>

      <C.CommentButton onClick={CommentSubmit} disabled={isSubmitDisabled}>
        완료
      </C.CommentButton>

      <C.CommentList>
        {currentEntries &&
          currentEntries.map((comment, index) => (
            <C.CommentItem key={index}>
              <C.CommentInfoWrapper>
                <C.CommentInfo>
                  <C.CommentAuthor>{comment.name}</C.CommentAuthor>
                  <C.CommentDate>{comment.created_at}</C.CommentDate>
                </C.CommentInfo>

                <C.CommentContent>{comment.content}</C.CommentContent>
              </C.CommentInfoWrapper>

              {comment.comment_tags && (
                <C.CommentTagsWrapper>
                  {comment.comment_tags.map((tag, index) => (
                    <C.CommentSelectedTag key={index}>
                      <C.CommentP>{tag}</C.CommentP>
                    </C.CommentSelectedTag>
                  ))}
                </C.CommentTagsWrapper>
              )}
            </C.CommentItem>
          ))}
      </C.CommentList>

      {/* 페이지네이션 */}
      <C.CommentPagination>
        <ul>
          {Array.from({ length: Math.ceil(data.length / entriesPerPage) }).map((_, index) => (
            <li
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </li>
          ))}
        </ul>
      </C.CommentPagination>
    </C.CommentWrapper>
  );
};

export default Comment;
