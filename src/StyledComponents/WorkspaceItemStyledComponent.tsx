import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";
export const Wrapper = styled.div`
  background: #fff;
  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 0.5rem 0.75rem;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-size: ${FontSize[24]};
  margin-bottom: 5px;
  color: ${Colors.blue}
`;

export const Content = styled.div`
  font-size: ${FontSize[18]};
  margin-bottom: 10px;
`;

export const Information = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  font-size: ${FontSize[16]};
`;

export const Company = styled.div``;

export const Updated = styled.div``;