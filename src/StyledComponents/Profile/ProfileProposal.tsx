import styled from "styled-components";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";

export const Wrapper = styled.div`
  padding-left:15px;
  h2{
    font-weight: 500;
    font-size: ${FontSize[22]};
    margin-bottom:30px;
  }
  .a{
    display:flex;
    margin-top:20px;
    justify-content:flex-end;
    padding-right:20px;
  }
  a{
    text-decoration:none;
    color: ${Colors.lightGray};
    font-size: ${FontSize[22]}
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
      line-height:30px;
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