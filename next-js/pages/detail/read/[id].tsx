import { useEffect, useState } from "react";
import * as S from "./styles";
import { resizing } from "./../../../src/utils/resizing";
import pbook from "../../../src/api/pbook";
import { useRouter } from "next/dist/client/router";

export default function ReadPage() {
  const router = useRouter();
  const [data, setData] = useState<any>();
  function countLines(target) {
    var style = window.getComputedStyle(target, null);
    var height = parseInt(style.getPropertyValue("height"));
    var font_size = parseInt(style.getPropertyValue("font-size"));
    var line_height = parseInt(style.getPropertyValue("line-height"));
    var box_sizing = style.getPropertyValue("box-sizing");

    if (isNaN(line_height)) line_height = font_size * 1.2;

    if (box_sizing == "border-box") {
      var padding_top = parseInt(style.getPropertyValue("padding-top"));
      var padding_bottom = parseInt(style.getPropertyValue("padding-bottom"));
      var border_top = parseInt(style.getPropertyValue("border-top-width"));
      var border_bottom = parseInt(
        style.getPropertyValue("border-bottom-width")
      );
      height =
        height - padding_top - padding_bottom - border_top - border_bottom;
    }
    var lines = Math.ceil(height / line_height);
    for (let i = 0; i < lines; i++) {
      document
        .getElementById("lineWrapper")
        .append((i + 1).toString(), document.createElement("span"));
    }
  }
  useEffect(() => {
    const id = router.query.id;
    id &&
      pbook.getBookDetail(id).then((res) => {
        setData(res.data);
        resizing("readTextarea");
        countLines(document.getElementById("readTextarea"));
      });
  }, [router]);
  return (
    <S.Wrapper>
      <S.Container>
        {data && (
          <>
            <h2>{data.title}</h2>
            <S.ReadArea>
              <div id="lineWrapper"></div>
              <textarea readOnly id="readTextarea" value={data.contents} />
            </S.ReadArea>
          </>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
