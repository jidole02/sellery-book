import IconContainer from "../../src/components/iconContainer";
import Rate from "./rate";
import * as S from "./styles";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import pbook from "../../src/api/pbook";
import { DOMAIN } from "./../../src/api/export";
import { getDate } from "./../../src/utils/date";
import { resizing } from "./../../src/utils/resizing";

export default function DetailPage() {
  const router = useRouter();
  const [data, setData] = useState<any>();
  const [rate, setRate] = useState<number>(5);
  useEffect(() => {
    const id = router.query.id;
    id &&
      pbook.getBookDetail(id,false).then((res) => {
        setData(res.data);
        resizing("writerComment");
      });
  }, [router]);
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
                      name=""
                      placeholder="댓글을 입력해 주세요. (엔터를 누르면 등록됩니다.)"
                    ></textarea>
                  </S.ReviewWrapper>
                </>
              </S.BottomContainer>
            </>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
