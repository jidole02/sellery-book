import { useState } from "react";
import { GenreArr } from "../../../src/utils/export";
import Description from "./description";
import * as S from "./styles";
import Tip from "./tip";
import book from "../../../src/api/book";
import { DOMAIN } from "./../../../src/api/export";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function NewPage() {
  const [data, setData] = useState({
    coverImg: "",
    title: "",
    intro: "",
    writerComment: "",
    genre: GenreArr[0],
  });
  const router = useRouter();
  const handleData = (event): void => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const imgUpload = (event: HTMLInputElement): void => {
    const formData = new FormData();
    formData.append("img", event.files[0]);
    if (event.files[0]) {
      book
        .sendImg(formData)
        .then((res) => {
          setData({
            ...data,
            coverImg: res.data.url,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("업로드 중 에러가 발생하였습니다.");
        });
    }
  };
  const fileUpload = (id) => {
    document.getElementById(id).click();
  };
  const allCheck = (): boolean => {
    for (let key in data) {
      if (!data[key]) return false;
    }
    return true;
  };
  const uploadBook = (): void => {
    if (!allCheck()) {
      toast.info("모든 정보를 입력해주세요!");
      return;
    }
    book
      .uploadBook(data)
      .then(() => {
        toast.success("성공적으로 저장되었습니다!");
        router.push("/write");
      })
      .catch((err) => console.log(err));
  };
  return (
    <S.Wrapper>
      <input
        type="file"
        id="coverImg"
        onChange={(event) => imgUpload(event.target)}
        accept="image/png, image/jpeg, image/jpg"
        style={{ display: "none" }}
      />
      <S.Container>
        <Description />
        <S.InpContainer>
          <>
            <S.LEFT_SIDE>
              {data.coverImg ? (
                <img
                  src={DOMAIN + data.coverImg}
                  onClick={() => fileUpload("coverImg")}
                />
              ) : (
                <button onClick={() => fileUpload("coverImg")} />
              )}
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
                <button
                  style={allCheck() ? { opacity: "1" } : { opacity: "0.5" }}
                  onClick={uploadBook}
                >
                  저장하기
                </button>
              </>
            </S.RIGHT_SIDE>
          </>
        </S.InpContainer>
      </S.Container>
    </S.Wrapper>
  );
}
