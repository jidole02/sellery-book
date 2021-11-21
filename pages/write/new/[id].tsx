import * as S from "../../../pagestyle/writenewstyles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import book from "../../../src/api/book";
import { toast } from "react-toastify";
import { resizing } from "./../../../src/utils/resizing";

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
    resizing("textarea");
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
  const handleData = (event) => {
    setContent(event.target.value);
  };
  const deleteBook = () => {
    if (confirm("정말로 삭제하시겠습니까? (삭제 후 복구가 불가능합니다.)")) {
      const password = prompt("비밀번호를 입력해주세요.");
      book
        .deleteBook(password, router.query.id)
        .then(() => {
          toast.success("정상적으로 삭제되었습니다.");
          router.push("/write");
        })
        .catch((err) => {
          if (err.response.status === 400) alert("비밀번호가 틀렸습니다.");
          else toast.error("에러가 발생하였습니다.");
        });
    }
  };
  const publishBook = () => {
    if (!content) {
      toast.info("책 내용이 비어있습니다.");
      return;
    }
    if (confirm("정말로 출판하시겠습니까? (출판 후 수정은 불가합니다.)")) {
      const password = prompt("비밀번호를 입력해주세요.");
      if (!password) return alert("비밀번호가 틀렸습니다.");
      book
        .publishBook(password, router.query.id, content)
        .then((res) => {
          toast.success("축하합니다! 책이 출판되었습니다!");
          router.push("/");
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
          placeholder="지금부터 자유롭게 책을 써보세요!"
          value={content}
          id="textarea"
        />
        <S.ContentBottom>
          <aside>도서는 1000자 이상 작성 후 출판 가능합니다.</aside>
          <div>
            <button onClick={deleteBook}>책 삭제</button>
            <button onClick={putContent}>임시저장</button>
            <button onClick={publishBook}>출판하기</button>
          </div>
        </S.ContentBottom>
      </S.ContentContaienr>
    </S.ContentWrapper>
  );
}
