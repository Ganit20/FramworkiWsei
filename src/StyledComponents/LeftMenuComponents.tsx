import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";

export const Wrapper = styled.div`
  width: 304px;
  height: 500px;
  display: flex;
  margin-left:3%;
  margin-top:20px;
  border-radius:2%;
  flex-direction: column;
  z-index: 1;
`;

export const Links = styled.div`
display:flex;
flex-direction: column;
`;

export const LinkIcon = styled.div`
margin-top:10px;
display:flex;
align-items:center;
text-decoration:none;
width:25%;
display:flex;
img{
    width:40px;
    height:40px;
    margin-left:10px;
}
button{
}
span{
    margin-top: 12px;
    margin-left:20px;
    font-size: ${FontSize[24]};
}
a{
    text-decoration:none;
    color:${Colors.black};
}
`;

export const SinglePostWrapper = styled.div`
    width: 304px;
    height: 330px;
    background:${Colors.white}};
    display: flex;
    border-radius:2%;
    flex-direction: column;
`;

export const ProfileWindow = styled.div`
    width:300px;
    height:220px;
    border-radius:2%;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:100px;
        height:100px;
        border-radius:50%;
    }
    :hover {
        cursor: pointer;
    }
    flex-direction: column;

`;

export const Name = styled.div`
    margin-top:10px;
    display:flex;
    color: ${Colors.lightGray};
    font-size: ${FontSize[24]};
    font-weight:bold;
    font-family: Tahoma;
`;
export const Occupation = styled.div`
    display:flex;
    color: ${Colors.gray};
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

export const Icon = styled.div`
 img{
        width:30px;
        height:30px;
        margin-left:10px;
    }
    width:25%;
`;

export const Text = styled.div`
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
