import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import book from "../../../src/api/book";
import { toast } from "react-toastify";

export default function WriteContentPage() {
  const router = useRouter();
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  useEffect(() => {
    router.query.id &&
      book
        .getTempContent(router.query.id)
        .then((res) => {
          setContent(res.data.contents);
          setTitle(res.data.title);
        })
        .catch((err) => {
          console.log(err);
          toast.error("정보를 불러오는데 실패히였습니다.");
        });
  }, [router.query.id]);
  const putContent = (): void => {
    book
      .putTempContent(content, router.query.id)
      .then((res) => {
        toast.success("성공적으로 저장되었습니다");
      })
      .catch((err) => {
        console.log(err);
        toast.error("저장에 실패하였습니다.");
      });
  };
  const resizing = (event) => {
    console.log(event.target.scrollHeight);
    event.target.style.height = event.target.scrollHeight + "px";
  };
  const handleData = (event) => {
    setContent(event.target.value);
  };
  const getKeyCode = (event) => {
    if (event.keyCode === 13) {
      setContent(content + ` [enter]`);
    }
  };
  return (
    <S.ContentWrapper>
      <S.ContentContaienr>
        <h3>{title}</h3>
        <textarea
          onChange={handleData}
          onKeyUp={resizing}
          onKeyDown={getKeyCode}
          placeholder="지금부터 자유롭게 책을 써보세요!"
          value={content}
        />
        <S.ContentBottom>
          <aside>
            엔터는 [enter]으로 처리됩니다. 출판시에는 엔터로 처리되어
            출판됩니다.
          </aside>
          <div>
            <button>책 삭제</button>
            <button onClick={putContent}>임시저장</button>
            <button>출판하기</button>
          </div>
        </S.ContentBottom>
      </S.ContentContaienr>
    </S.ContentWrapper>
  );
}
