import { useEffect, useState } from "react";
import { GenreArr } from "../../../src/utils/export";
import Description from "./description";
import * as S from "../../../pagestyle/writenewstyles";
import Tip from "./tip";
import book from "../../../src/api/book";
import { DOMAIN } from "./../../../src/api/export";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { getQueryStringObject } from "../../../src/utils/getQuery";

export default function NewPage() {
  const [data, setData] = useState({
    coverImg: "",
    title: "",
    intro: "",
    writerComment: "",
    genre: "",
  });
  const { coverImg, title, intro, writerComment, genre } = data;
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
    const qs: any = getQueryStringObject();
    if (!allCheck()) {
      toast.info("모든 정보를 입력해주세요!");
      return;
    }
    if (qs.update) {
      book
        .updateBookInfo(qs.id, data)
        .then(() => {
          toast.success("정보가 수정되었습니다.");
          router.push("/write");
        })
        .catch((err) => {
          toast.error("에러가 발생하였습니다.");
          console.log(err);
        });
    } else {
      book
        .uploadBook(data)
        .then(() => {
          toast.success("성공적으로 저장되었습니다!");
          router.push("/write");
        })
        .catch((err) => {
          if (err.response.status === 403) {
            toast.error(
              "한도를 초과했습니다. 한번에 최대 2권까지 집필 가능합니다."
            );
          }
          console.log(err);
        });
    }
  };
  useEffect(() => {
    const qs: any = getQueryStringObject();
    if (qs.update) {
      book
        .getBookInfo(qs.id)
        .then((res) => {
          const data = res.data;
          setData({
            title: data.title,
            intro: data.intro,
            coverImg: data.coverImg,
            writerComment: data.writerComment,
            genre: data.genre,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("정보를 불러오는데 실패하였습니다.");
        });
    } else {
      setData({ ...data, genre: GenreArr[0] });
    }
  }, []);
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
                  src={DOMAIN + coverImg}
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
                    value={title}
                  />
                </S.WriteWrapper>
                <S.WriteWrapper>
                  <span>책 내용 소개</span>
                  <textarea
                    placeholder="책 내용을 간략히 소개해주세요!"
                    name="intro"
                    onChange={handleData}
                    value={intro}
                  />
                </S.WriteWrapper>
                <S.WriteWrapper>
                  <span>작가의 말</span>
                  <textarea
                    placeholder="독자에게 하고싶은 말을 적어주세요."
                    name="writerComment"
                    onChange={handleData}
                    value={writerComment}
                  />
                </S.WriteWrapper>
                <S.WriteWrapper>
                  <span>장르</span>
                  {genre && (
                    <select
                      name="genre"
                      onChange={handleData}
                      defaultValue={genre}
                    >
                      {GenreArr.map((genre, index) => (
                        <option key={index} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  )}
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
