import IconContainer from "../../src/components/iconContainer";
import Rate from "./rate";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import pbook from "../../src/api/pbook";
import { DOMAIN } from "./../../src/api/export";
import { getDate } from "./../../src/utils/date";
import { resizing } from "./../../src/utils/resizing";
import { toast } from "react-toastify";
import BigStarIcon from "../../src/assets/bigStar";

export default function DetailPage() {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [rate, setRate] = useState<number>(5);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<any[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  const arr = [1, 2, 3, 4, 5];
  useEffect(() => {
    pbook.getComment(router.query.id).then((res) => {
      setComments(res.data);
    });
  }, [toggle, router]);
  useEffect(() => {
    const id = router.query.id;
    id &&
      pbook.getBookDetail(id).then((res) => {
        setData(res.data);
        resizing("writerComment");
      });
  }, [router]);
  const handleComment = (event): void => {
    setComment(event.target.value);
  };
  const subData = (event): void => {
    if (event.keyCode === 13) {
      if (rate && comment) {
        pbook
          .writeComment(router.query.id, rate, comment)
          .then((res) => {
            toast.success("댓글이 등록되었습니다.");
            setComment("");
            setToggle(!toggle);
          })
          .catch((err) => {
            console.log(err);
            toast.error("에러가 발생하였습니다.");
          });
      } else {
        toast.info("모든 정보를 입력해주세요.");
      }
    }
  };
  const checkToken = () => {
    if (!localStorage.getItem("sellery-token")) {
      toast.info("로그인 후 이용해주세요.");
      return;
    }
  };
  return (
    <S.Wrapper>
      <S.Container>
        {data && (
          <>
            <>
              <S.BookInfo>
                <img src={DOMAIN + data.coverImg} alt="" />
                <article>
                  <aside>{data.genre}</aside>
                  <h3>{data.title}</h3>
                  <span>
                    {data.writerName} 작가 <b>|</b>최초 공개{" "}
                    {getDate(data.date)}
                  </span>
                  <IconContainer
                    see={data.views}
                    rate={data.rate}
                    margin={40}
                  />
                </article>
                <button
                  onClick={() => router.push(`/detail/read/${router.query.id}`)}
                >
                  무료보기
                </button>
              </S.BookInfo>
            </>
            <>
              <S.IntroComment>
                <h6>[내용소개]</h6>
                <textarea
                  readOnly
                  id="writerComment"
                  defaultValue={data.intro}
                />
              </S.IntroComment>
            </>
            <>
              <S.BottomContainer>
                <>
                  <h4>{data.writerName} 작가의 말</h4>
                  <S.Line margin={20} />
                  <textarea readOnly defaultValue={data.writerComment} />
                </>
                <>
                  <h4>전체 리뷰</h4>
                  <S.Line margin={20} />
                  <S.ReviewWrapper>
                    <h3>책은 어떠셨나요?</h3>
                    <aside>리뷰는 언제나 큰 도움이 된다는 사실!</aside>
                    <Rate rate={rate} callback={setRate} />
                    <textarea
                      onFocus={checkToken}
                      onKeyDown={subData}
                      onChange={handleComment}
                      placeholder="댓글을 입력해 주세요. (엔터를 누르면 등록됩니다.)"
                      value={comment}
                    ></textarea>
                  </S.ReviewWrapper>
                  {comments.map((obj, index) => (
                    <S.CommentWrapper key={index}>
                      <S.CommentInfo>
                        <div>
                          {arr.map((e, index) => (
                            <BigStarIcon
                              check={e <= obj.rate}
                              size={17}
                              key={index}
                            />
                          ))}
                        </div>
                        <article>
                          <span>{obj.writerName}</span>
                          <time>{getDate(obj.date)}</time>
                        </article>
                      </S.CommentInfo>
                      <S.CommentContents>{obj.contents}</S.CommentContents>
                    </S.CommentWrapper>
                  ))}
                </>
              </S.BottomContainer>
            </>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
