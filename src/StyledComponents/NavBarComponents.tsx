import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";

export const MainWrapper = styled.div`
  width: 100%;
  background:${Colors.white};
  height: 70px;
  box-shadow: 1px 1px 12px ${Colors.black};
  display: flex;
  align-items: flex-start;
  z-index: 3;
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 14px;  
    width: 28%;
    display: flex;
    justify-content:flex-end;
  `;

  
  
export const Logo = styled.div`
  margin-left:2%;
  display: flex;
  height: 50px;
  width: 5%;
  margin-top:0.3%;
  :hover {
    cursor: pointer;
}
`;
export const SearchWrapper = styled.fieldset`
  position: relative;
  width: 40%;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid lightgrey;
  text-align: center;
  font-family:Tahoma;
  font-size: ${FontSize[18]};
`;

export const SearchIcon = styled.button`
  background: url('./icons/search.svg') no-repeat;
  display: block;
  margin: auto auto;
  top:0;
  bottom:0;
  width: 25px;
  right: 10px;
  height: 25px;
  border: none;
  position: absolute;
  background-size: cover;
  outline: none;
  :hover {
    cursor: pointer;
  }  
`;
export const NotifyButton = styled.a`
  img {
    max-width: 25px;
    height: 25xp;
    margin-right: 0;
  }
  background-color:${Colors.white};
        :hover {
          background-color:${Colors.lightGray};
  }  
  position: relative;
  display:flex;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;
