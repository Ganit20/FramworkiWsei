import styled from "styled-components";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";

export const MainWrapper = styled.div`
    background-color: ${Colors.white};
    border-radius: 20px;
`; 
export const Wrapper = styled.div`
  padding-left:15px;
  padding-bottom:30px;
  h2{
    font-weight: 500;
    font-size: ${FontSize[22]};
    margin-top:25px;
    margin-bottom:10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  & > thead {
    border-bottom: 1px solid ${Colors.lightGray};
  }
  & th {
    text-align: left;
  }
  tr{
    line-height:22px;
  }
  & .header{
    font-size: ${FontSize[20]};
  }
  & tbody{
    button{
        border:none;
        background-color: ${Colors.white}
    }
  }
`;

export const Input = styled.input`
  border: 1px solid lightgrey;
`;
export const DropDownWrapper = styled.div`
  display: flex;
  width: fit-content;
`;

export const Select = styled.select`
  border: 2px solid ${Colors.lightGray};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.lightGray};
  padding: 3px 6px;
  margin-left: 5px;
`;
