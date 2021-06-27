import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";
export const Wrapper = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  background-color: ${Colors.white};
  margin-bottom: 30px;
`;

export const InnerWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;

export const Header = styled.div`
  background: url("./images/sign2.jpg");
  background-size: cover;
  background-position-y: center;
  width:100%;
  height: 220px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: ${FontSize[20]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 14px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  padding-left: 14px;
`;