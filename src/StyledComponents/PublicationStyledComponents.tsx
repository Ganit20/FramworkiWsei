import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";

export const MainWrapper = styled.div`
  display:flex;
  background: ${Colors.white};
  width: 100%;
  height: 400px;
  font-family: Tahoma;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-bottom: 20px;
`;

export const MainPublicationWrapper = styled.div`
  height: 400px;
`;
export const styledH2 = styled.h2`
  padding: 15px;
`;
export const Publications = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px;
  h2{
      font-size: ${FontSize[20]};
  }
`;