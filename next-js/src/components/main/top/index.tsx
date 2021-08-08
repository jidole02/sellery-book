import { useEffect, useState } from "react";
import * as S from "./styles";
import useInterval from "../../../utils/useInterval";
import pbook from "../../../api/pbook";
import { DOMAIN } from "./../../../api/export";
import SmallCard from "./smallCard";
import { useRouter } from 'next/dist/client/router';

export default function Top() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();
  useEffect(() => {
    pbook.getNewBook().then((res) => {
      setData(res.data);
    });
  }, []);
  const ment = [
    {
      m1: "오늘같은 날",
      m2: "이런 책 어떠세요?",
    },
    {
      m1: "따끈한 신작,",
      m2: "지금 바로 보러가세요!",
    },
    {
      m1: "책 읽기 좋은 날,",
      m2: "이런 책은 어떠신가요?",
    },
    {
      m1: "오늘 나온 작품,",
      m2: "지금 바로 만나보세요!",
    },
  ];
  const [page, setPage] = useState<number>(0);
  useInterval(() => {
    if (page === 3) setPage(0);
    else setPage(page + 1);
  }, 4000);
  return (
    <S.TopBar>
      <>
        <S.Wrapper>
          <>
            <S.Slider style={{ transform: `translateX(-${page * 25}%)` }}>
              {data.map((obj, index) => (
                <S.Card key={index}>
                  <S.Infor>
                    <h1>
                      {ment[index].m1}
                      <br />
                      {ment[index].m2}
                    </h1>
                    <span>
                      <mark>{obj.writerName}</mark>작가 신작
                    </span>
                    <button onClick={()=>router.push(`/detail/${obj["_id"]}`)}>바로가기</button>
                  </S.Infor>
                  <S.ConverImg src={DOMAIN + obj.coverImg} />
                </S.Card>
              ))}
            </S.Slider>
          </>
        </S.Wrapper>
      </>
      <>
        <section>
          {data.length > 0 &&
            data
              .slice(0, 2)
              .map((obj, index) => (
                <SmallCard
                  key={index}
                  id={obj["_id"]}
                  title={obj.title}
                  src={DOMAIN + obj.coverImg}
                  name={obj.writerName}
                  see={obj.views}
                  rate={obj.rate}
                />
              ))}
        </section>
      </>
    </S.TopBar>
  );
}
