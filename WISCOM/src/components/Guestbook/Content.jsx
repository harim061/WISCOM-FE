import { useState, useEffect } from 'react';
import * as C from './ContentStyle';
import axios from 'axios';

export default function Content() {
  const [data, setData] = useState('');

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    await axios
      .get(`https://wiscom2023.store/guests/`)
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
        .post(`https://wiscom2023.store/guests/`, {
          name: name,
          content: inputText,
        })
        .then((response) => {
          console.log('작성 성공');
          window.location.reload();
        })
        .catch((error) => {
          console.log('작성 실패');
          console.log(error.response.data);
        });
    }

    setName([]);
    setInputText([]);
    getDatas();
  };

  const [name, setName] = useState(''); //이름
  const [inputText, setInputText] = useState(''); // 입력된 텍스트를 저장하는 상태
  const maxLength = 200; // 최대 글자 수
  const [entries, setEntries] = useState([]); // 입력된 내용을 저장하는 배열
  const entriesPerPage = 6; // 한 페이지에 보일 엔트리 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

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

  const isSubmitDisabled = inputText === '' || inputText.length > maxLength || name === ''; //완료 버튼 비활성화 조건

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentEntries = entries.slice(startIndex, endIndex);

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    try {
      const response = await axios.get(
        `https://wiscom2023.store/guests/?limit=${entriesPerPage}&offset=${(page - 1) * entriesPerPage}`,
      );
      setData(response.data);
    } catch (error) {
      console.error('페이지 데이터를 불러오는 중 에러 발생:', error);
    }
  };

  return (
    <C.ContentContainer>
      <C.Title>방명록을 남겨주세요</C.Title>
      <br />
      <br />
      <br />
      <br />
      <br />
      <C.InputBox>
        <C.CommentInput
          type="text"
          placeholder="이름을 5자 이내로 입력해주세요" // 이름을 입력할 플레이스홀더 추가
          value={name}
          onChange={handleNameChange} // 이름을 입력하는 이벤트 핸들러 추가
        />
        <C.ContentInput
          placeholder="방명록을 작성해주세요"
          value={inputText}
          onChange={handleInputChange}
          maxLength={maxLength}
        />
        <C.InputCount>
          {inputText.length}/{maxLength}
        </C.InputCount>
      </C.InputBox>
      <br />

      <C.Button onClick={CommentSubmit} disabled={isSubmitDisabled}>
        완료
      </C.Button>

      <C.Entries>
        {data.results &&
          data.results.map((entry, index) => (
            <C.EntryItem key={index}>
              <C.EntryDate>
                {entry.name} {entry.created_at}
              </C.EntryDate>
              <br />
              <C.EntryWrapper>
                <C.EntryText>{entry.content}</C.EntryText>
              </C.EntryWrapper>
            </C.EntryItem>
          ))}
      </C.Entries>

      <C.Pagination>
        <ul>
          {Array.from({ length: Math.ceil(data.count / entriesPerPage) }).map((_, index) => (
            <li
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}>
              {index + 1}
            </li>
          ))}
        </ul>
      </C.Pagination>
    </C.ContentContainer>
  );
}
