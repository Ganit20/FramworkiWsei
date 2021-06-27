import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";


export const Wrapper = styled.div`
  display:flex;
  position: relative;
  height: 100%;
  color: ${Colors.white}
`;

export const PublicationImage = styled.div`
  height: 100%;
  width:100%;
  position: absolute;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: url("${(props: {thumbnailSrc: string}) => props.thumbnailSrc}");
  background-size: cover;
  z-index: 0;
`;

export const PublicationContent = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom:30px;
  padding-left: 5px;
`;

export const Title = styled.div`
  font-size: ${FontSize[16]};
  padding-bottom: 15px;
`;

export const WhoAndWhen = styled.div`
  display: flex;
  font-size: ${FontSize[18]};
  height: fit-content;
`;

export const CreationDate = styled.div`
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const ProfileImage = styled.img`
  height:20px;
  border-radius: 50%;
  margin-right: 5px;
`;