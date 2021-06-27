import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";
export const Wrapper = styled.div`
  padding: 10px;
  .buttons{
      display:flex;
      justify-content: flex-end;
      margin-bottom: 10px;
      button{
        margin-right: 5px;
        border:none;
        background-color: ${Colors.white};
    }
  }
`;

export const InnerWrapper = styled.div`
  margin-bottom: 10px;
`;

export const InnerWrapperTitle = styled.div`
  color: ${Colors.gray};
  margin-bottom: 5px;
  font-size: ${FontSize[20]};
`;

export const InnerWrapperBody = styled.div`
  display: flex;
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
  flex-wrap: nowrap;
  background: ${Colors.cyan};
  color: ${Colors.darkcyan};
  button{
      border:none;
      background-color: ${Colors.cyan};
  }
`;

export const AddButton = styled.button`
  background: ${Colors.cyan};
  color: ${Colors.darkcyan};
  border-radius: 8px;
  margin-right: 5px;
  border:none;
`;

export const Input = styled.input`
  border: 1px solid ${Colors.black};
  border-radius: 5px;
  margin-right: 10px;
`;