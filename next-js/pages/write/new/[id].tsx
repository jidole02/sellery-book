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
  useEffect(() => {
    resizingById();
  }, [content]);
  const putContent = (): void => {
    book
      .putTempContent(content, router.query.id)
      .then(() => {
        toast.success("성공적으로 저장되었습니다");
      })
      .catch((err) => {
        console.log(err);
        toast.error("저장에 실패하였습니다.");
      });
  };
  const resizingById = () => {
    const textarea = document.getElementById("textarea");
    textarea.style.height = textarea.scrollHeight.toString() + "px";
  };
  const handleData = (event) => {
    setContent(event.target.value);
  };
  const getKeyCode = (event) => {
    if (event.keyCode === 13) {
      setContent(content + ` [enter]`);
    }
  };
  const deleteBook = () => {
    if (confirm("정말로 삭제하시겠습니까? (삭제 후 복구가 불가능합니다.)")) {
      const password = prompt("비밀번호를 입력해주세요.");
      book
        .deleteBook(password, router.query.id)
        .then((res) => {
          toast.success("정상적으로 삭제되었습니다.");
          router.push("/write");
        })
        .catch((err) => {
          if (err.response.status === 400) alert("비밀번호가 틀렸습니다.");
          else toast.error("에러가 발생하였습니다.");
        });
    }
  };
  return (
    <S.ContentWrapper>
      <S.ContentContaienr>
        <h3>{title}</h3>
        <textarea
          onChange={handleData}
          onKeyDown={getKeyCode}
          placeholder="지금부터 자유롭게 책을 써보세요!"
          value={content}
          id="textarea"
        />
        <S.ContentBottom>
          <aside>
            엔터는 [enter]로 처리됩니다. 출판시에는 엔터처리 되어 출판됩니다.
          </aside>
          <div>
            <button onClick={deleteBook}>책 삭제</button>
            <button onClick={putContent}>임시저장</button>
            <button>출판하기</button>
          </div>
        </S.ContentBottom>
      </S.ContentContaienr>
    </S.ContentWrapper>
  );
}