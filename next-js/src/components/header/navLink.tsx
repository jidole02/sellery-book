import * as S from "./styles";
import { useRouter } from "next/router";

interface props {
  href: string;
  content: string;
}

export default function NavLink({ href, content }: props) {
  const router = useRouter();
  return (
    <S.Link
      onClick={() => router.push(href)}
      className={router.pathname === href ? "active" : ""}
    >
      {content}
    </S.Link>
  );
}
