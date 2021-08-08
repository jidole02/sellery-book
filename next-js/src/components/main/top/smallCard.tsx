import IconContainer from "./../../iconContainer/index";

export default function SmallCard({src,title,name,see,rate}) {
  return (
    <article>
      <img src={src} />
      <div>
        <h3>{title}</h3>
        <span>{name} 작가</span>
        <aside>로맨스</aside>
        <IconContainer see={see} rate={rate} margin={19} />
      </div>
    </article>
  );
}
