import IconContainer from "./../../iconContainer/index";
import { useRouter } from 'next/dist/client/router';
import { numberToKorean } from './../../../utils/chageNum';

export default function SmallCard({src,title,name,see,rate,id,genre}) {
  const router = useRouter();
  return (
    <article onClick={()=>router.push(`/detail/${id}`)}>
      <img src={src} />
      <div>
        <h3>{title}</h3>
        <span>{name} 작가</span>
        <aside>{genre}</aside>
        <IconContainer see={numberToKorean(see)} rate={rate} margin={19} />
      </div>
    </article>
  );
}
