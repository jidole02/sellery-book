import { useState } from "react";
import * as S from "./styles";
import useInterval from "../../../utils/useInterval";
import EyeIcon from "../../../assets/eye";
import StarIcon from "../../../assets/star";

export default function Top() {
  const [data, setData] = useState<any[]>([1, 2, 3, 4]);
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
              {data.map((e, index) => (
                <S.Card key={index}>
                  <S.Infor>
                    <h1>
                      {ment[index].m1}
                      <br />
                      {ment[index].m2}
                    </h1>
                    <span>
                      <mark>김지현</mark>작가 신작!
                    </span>
                    <button>바로가기</button>
                  </S.Infor>
                  <S.ConverImg src="https://i.pinimg.com/564x/bf/69/78/bf6978d06ec0087b3f9d2502b25b3cbe.jpg" />
                </S.Card>
              ))}
            </S.Slider>
          </>
        </S.Wrapper>
      </>
      <>
        <section>
          <article>
            <img src="http://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0309/IE002297749_STD.jpg" />
            <div>
              <h3>많은 이들을 기리며</h3>
              <span>설운도 작가</span>
              <S.IconWrapper>
                <div>
                  <EyeIcon /> 400
                </div>
                <div>
                  <StarIcon /> 200
                </div>
              </S.IconWrapper>
            </div>
          </article>
          <S.Line/>
          <article>
            <img src="http://ojsfile.ohmynews.com/STD_IMG_FILE/2018/0309/IE002297749_STD.jpg" />
            <div>
              <h3>많은 이들을 기리며</h3>
              <span>설운도 작가</span>
              <S.IconWrapper>
                <div>
                  <EyeIcon /> 400
                </div>
                <div>
                  <StarIcon /> 200
                </div>
              </S.IconWrapper>
            </div>
          </article>
        </section>
      </>
    </S.TopBar>
  );
}
