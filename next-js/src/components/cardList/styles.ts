import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

interface props {
  border: boolean;
}

export const Title = styled.div<props>`
  border-top: ${(props) => (props.border ? "1px solid #dcdcdc" : "none")};
  padding-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 180px);
  justify-content: space-between;
  margin-top: 25px;
  grid-row-gap: 40px;
`;
