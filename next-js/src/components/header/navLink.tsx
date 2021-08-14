import * as S from "./styles";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface props {
  href: string;
  content: string;
}

export default function NavLink({ href, content }: props) {
  const router = useRouter();
  return (
    <S.Link
      onClick={() => {
        if (href === "/write") {
          if (!localStorage.getItem("sellery-token")) {
            toast.info("로그인 후 이용해주세요!");
            router.push("/auth/login");
            return;
          }
        }
        router.push(href);
      }}
      className={
        router.pathname.includes("/all")
          ? href.includes("/all")
            ? "active"
            : ""
          : router.pathname === href
          ? "active"
          : ""
      }
    >
      {content}
    </S.Link>
  );
}
