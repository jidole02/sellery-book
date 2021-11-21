import * as S from "../../pagestyle/searchStyles";
import CardList from "../../src/components/cardList";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const router = useRouter();
  const [title, setTitle] = useState<string[] | string>();
  useEffect(() => {
    router.query.title && setTitle(router.query.title);
  }, [router.query]);
  return (
    <S.Wrapper>
      <S.Container>
        {title && (
          <CardList
            border={false}
            condition={`search?title=${title}`}
            title={`"${title}" 에 대한 검색 결과`}
          />
        )}
      </S.Container>
    </S.Wrapper>
  );
}
