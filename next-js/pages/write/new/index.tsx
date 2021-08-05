import { useState } from "react";
import { GenreArr } from "../../../src/utils/export";
import Description from "./description";
import * as S from "./styles";
import Tip from "./tip";

export default function NewPage() {
  const [data, setData] = useState({
    coverImg: "",
    title: "",
    intro: "",
    writerComment: "",
    genre: "",
  });
  const { coverImg, title, intro, writerComment, genre } = data;
  const handleData = (event): void => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log(data)
  return (
    <S.Wrapper>
      <S.Container>
        <Description />
        <S.InpContainer>
          <>
            <S.LEFT_SIDE>
              <button />
              <p>
                위를 눌러 책 표지를 업로드하세요.
                <br /> 2x3 비율을 권장합니다.
              </p>
            </S.LEFT_SIDE>
          </>
          <>
            <S.RIGHT_SIDE>
              <Tip />
              <>
                <S.WriteWrapper>
                  <span>책 제목</span>
                  <input
                    type="text"
                    placeholder="책 제목을 입력해주세요."
                    name="title"
                    onChange={handleData}
                  />
                </S.WriteWrapper>
                <S.WriteWrapper>
                  <span>책 내용 소개</span>
                  <textarea
                    placeholder="책 내용을 간략히 소개해주세요!"
                    name="intro"
                    onChange={handleData}
                  />
                </S.WriteWrapper>
                <S.WriteWrapper>
                  <span>작가의 말</span>
                  <textarea
                    placeholder="독자에게 하고싶은 말을 적어주세요."
                    name="writerComment"
                    onChange={handleData}
                  />
                </S.WriteWrapper>
                <S.WriteWrapper>
                  <span>장르</span>
                  <select name="genre" onChange={handleData}>
                    {GenreArr.map((genre, index) => (
                      <option key={index} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </S.WriteWrapper>
                <button>저장하기</button>
              </>
            </S.RIGHT_SIDE>
          </>
        </S.InpContainer>
      </S.Container>
    </S.Wrapper>
  );
}
