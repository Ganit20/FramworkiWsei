import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";
export  const MainWrapper = styled.div`
    width:100%;
    margin-right:8%;
    margin-top:0.4%;
    z-index: 2;
    background:${Colors.white}
`;

export  const MenuToTogge = styled.div`
    width:320px;
    height:50px;
    display: flex;
`;

export  const Icon = styled.div`
    width:15%;
    height:100%;
    img {
        width: 100%;
        height: 100%;
    }
    :hover {
        cursor: pointer;
    }
`;

export  const Text = styled.div`
    width:70%;
    height: 100%;
    font-size: ${FontSize[24]};
    align-items: center;
    padding-left:5%;
    display:flex;
    font-family: Tahoma;
`;



export   const AccountWrapper = styled.div`
    width:100%;
    height:152px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    #Account{
        margin-left:10px;
        margin-top:8px;
        font-size: ${FontSize[16]};
    }
`;
export   const Profile = styled.div` 
    margin-left: 10px;
    margin-top: 5px;
    margin-right: 15px;
    display:flex;
    flex-direction:row;
    align-items:center;
    img{
        margin-top: 5px;
        height:40px;
        width:auto;
        margin-right: 10px;
        border-radius:50px;
    }
    p{
        font-size: ${FontSize[18]};
        margin-bottom:5px;
    }
    a{
        text-decoration:none;
        font-weight: bold;
    }
    #NameAndLink{
        margin-left:8px;
    }
    div{
        display:flex;
        flex-direction:column;
    }
`;

export   const PrivacyAndSettings = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:150px;
    #Privacy,#Settings{
        display:flex;
        align-items:center;
        margin-top: 10px;
        margin-left: 15px;
        img{
            height:25px;
            margin-right:20px;
        }
        a{
            text-decoration:none;
            color: ${Colors.black};
        }
    }
`;
export  const ToggleWrapper = styled.div`
    width:310px;
    border:1px solid gray;
    background-color: ${Colors.white};
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    #filterInput{
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        align-items:center;
        input{
        border-radius:5px;
        height: 35px;
        width: 80%;
        font-size: ${FontSize[18]};
        outline:none;
        }
    }
`;

export  const InnerWarpper = styled.div`
    width:100%;
    height:280px;
    display: flex;
    flex-direction: column;
    font-family: Tahoma;
    overflow-y:scroll;
    margin-left:8px;
    a{
        text-decoration:none;
        color: ${Colors.black};
    }
`;
export const Arrow = styled.div`
    width:15%;
    height:100%;
    img {
        width: 50%;
        height: 100%;
        left:0;
        :hover {
            cursor: pointer;
        }  
    }
`;

export  const MenuItem = styled.div`
    width:90%;
    height: 40px;
    margin-left: 5px;
    margin-top: 5px;
    display:flex;
    justify-content:start;
    align-items:center;
    font-size: ${FontSize[18]};
    img{
        height: 25px;
        width:25px;
        margin-right: 20px;
    }
    p{
        margin: 2px 2px;
        font-size: ${FontSize[16]}
    }
`;

export const ProfileWrapper = styled.div`
    width: 304px;
    height: 330px;
    background:#f0f0f0;
    display: flex;
    border-radius:2%;
    flex-direction: column;
`;

export const ProfileWindow = styled.div`
    display:flex;
    width:300px;
    border-radius:2%;
    img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
`;

export const Name = styled.div`
    margin-top:10px;

    color: ${Colors.lightGray};
    font-size: ${FontSize[24]};
    font-weight:bold;
    font-family: Tahoma;
`;
export const Occupation = styled.div`
    color: ${Colors.gray};
    display:block;
    font-size: ${FontSize[18]};
    font-family: Tahoma;
    margin-top:20px;
`;
export const ProfileButtons = styled.div`
    margin-top:3%;
    font-family: Tahoma;
    font-size:${FontSize[20]};
    display:flex;
    width:100%;
    flex-direction: row;
`;

export const pIcon = styled.div`
 img{
        width:30px;
        height:30px;
        margin-left:10px;
    }
    width:25%;
`;

export const pText = styled.div`
    width:55%;
    height:30px;
    align-items:center;
    display:flex;
`;
export const Button=styled.button`
    top:0;
    width:15%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:15%;
    outline:none;
    img{
        width:20px;
        height:20px;
    }
    :hover{
        cursor: pointer;
    }
`;