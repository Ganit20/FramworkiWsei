import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";
export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h2{
    font-size: ${FontSize[24]};
  }
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterButtons = styled(Filters)`
  margin-top: 8px;
  justify-content: space-between;
`;

export const TitleFilter = styled.input`
  border: 1px solid ${Colors.lightGray};
  background: ${Colors.white} url("/icons/search.png") no-repeat;
  background-position-x: calc(100% - 10px);
  background-position-y: center;
  background-size: 14px 14px;
  padding: 5px 30px 5px 10px;
  width: 200px;
  color: ${Colors.gray};
`;

export const Content = styled.div`
  margin-top: 1rem;
`;