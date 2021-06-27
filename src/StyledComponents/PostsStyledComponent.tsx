import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";

export const PostMainContainer = styled.div`
width:100%;
height:130px;
background-color: ${Colors.white};
display:flex;
flex-direction: column;
padding-left:15px;
font-family:Tahoma;
margin-bottom: 15px;
.title{
    margin-top:6px;
    font-size: ${FontSize[24]};
    margin-bottom:10px;
    color: ${Colors.blue}
}
a{
    text-decoration:none;
    color: ${Colors.blue};
}
.corpTypeUpdate{
    display:flex;
    flex-direction:row;
    align-items:center;
    margin-top:20px;
}
.corpPicture{
    border-radius:50%;
}
.corpPicture, .typeIcon{
    width:25px;
    height:25px;
    margin-left:5px;
    margin-right:5px;
}
.text{
    font-size: ${FontSize[18]};
}
h1{
    font-weight:bold;
    font-size: ${FontSize[24]};
    margin-left: 10px;
    margin-right: 10px;
}
`;
export const Wrapper = styled.div`
    width:100%;
    height: 800px;
    margin-top:20px;
`;

export const PaginationButtons = styled.div`
    display: flex;
    justify-content: center;
    button{
        width:40px;
        height:40px;
        background-color: ${Colors.white};
        border: 1px solid ${Colors.gray};
    }
    .outerButton{
        width:90px;
    }
`;

export const button = styled.button`
        width:40px;
        height:40px;
        background-color: ${Colors.white};
        border-radius:50%;
`;
