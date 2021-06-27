import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";
export const MainWrapper = styled.div`
    width: 100%;
    height:200px;
    margin-top: 20px;
    display:flex;
    flex-direction:column;
    margin-bottom:20px;
`;
export const Wrapper = styled.div`
  width: 150px;
  height:200px; 
  flex-direction: column;
  background-color: ${Colors.white};
  position: relative;
  font-family: Tahoma;
  Border-radius:5%;
  Padding-left:15px;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 80px;
  position:absolute;
  width: 100%;
  height: 80px;
  background: url(${(props: {bannerUrl: string}) => props.bannerUrl}) no-repeat;
  background-size: cover;
  Border-radius:5%;
`;

export const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
export const TypeImage = styled.img`
  width:90px;
  height:90px;
  position:absolute;
  border: 1px solid ${Colors.gray};
  margin-left: 15px;
  margin-top: 50px;
  border-radius: 10px;
  background-color: ${Colors.white};
`;

export const Title = styled.div`
  position:absolute;
  margin-top:90px;
  margin-left: 120px;
  font-size: ${FontSize[24]};
`;

export const Information = styled.div`
  display: flex;
  position:absolute;
  flex-direction: column;
  margin-top: 150px;
  margin-left:14px;
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  font-size: ${FontSize[16]};
`;

export const LastUpdated = styled.div`
  margin-left:5px;
`;

export const InformationIcon = styled.img`
  width: 30px;
  height:30px;
`;