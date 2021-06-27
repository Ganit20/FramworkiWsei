import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";
export const MainPageWrapper = styled.div`
width: 70%;
height: 1000px;
margin-left: 60px;
margin-right: 80px;
margin-top: 20px;
font-family: Tahoma;
span{
    font-weight: 500;
    font-size: ${FontSize[24]};
    margin-left:15px;
}
`;
export const Wrapper = styled.div``;
export const MainFilter = styled.div`
    select{
      margin-left:10px;
    }
    input{
      margin-left: 10px;
    }
`;

export const Row = styled.div`
    margin-top:10px;
`;
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        border:none;
    };
    .pageTitle{
        font-size: ${FontSize[24]};
        margin-bottom: 10px;
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: ${(props: {displayType: number}) => props.displayType == 0 ? 'repeat(4, 1fr)' : '1fr'};
    gap: 10px;
`;

export const Card = styled.div`
    display:flex;
    border-radius: 10px;
    background-color: ${Colors.white};
    .textContainer{
        margin-left:5px;
    };
    .entityName{
        font-size: ${FontSize[20]};
        color: ${Colors.blue};
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 50px;
    };
    .entityAddress{
        color: ${Colors.gray};
    };
`;

export const Filters = styled.div`
    .innerFilterWrapper{
        margin-top:10px;
        display:flex;
        justify-content: space-between;
        margin-bottom: 10px;
    };
    button{
        margin-right: 10px;
    }
`;

export const TitleFilter = styled.input`
    border: 1px solid lightgrey;
    background: ${Colors.white} url("/icons/search.png") no-repeat;
    background-position-x: calc(100% - 10px);
    background-position-y: center;
    background-size: 14px 14px;
    padding: 5px 30px 5px 10px;
    width: 200px;
    color: grey;
    display:flex;
    height: 20px;
    &:focus {
        outline: 1px solid ${Colors.black};
    };
`;