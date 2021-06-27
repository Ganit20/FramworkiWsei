import styled from "styled-components";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";



export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  a{
      text-decoration:none;
      color: ${Colors.blue};
  }
`;

export const TopButtons = styled.div`
  align-self: flex-end;
  width: fit-content;
  display: flex;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  gap: 4px;
  display: flex;
  align-items: center;
  background-color: ${Colors.white};
  border: none;
  a{
      text-decoration:none;
      color: ${Colors.black};
  }
`;

export const UserInnerWrapper = styled.div`
  height: fit-content;
  display:flex;
  flex-direction: row;
    .contanier{
        margin-left:10px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        width: 90%;
        button{
            background-color: ${Colors.white};
            border:none;
        }
    }
    .userInfo{
        display:flex;
        flex-direction: column;
        gap:5px;
    }
    .editmode{
       margin-bottom: 20px;
    }
`;

export const ProfilePictureWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    align-self: center;
`;

export const ProfilePicture = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 50%;
`;

export const Input = styled.input`
    border: 1px solid ${Colors.black};
    padding: 0 10px;
    height: 25px;
`;
