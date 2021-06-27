import styled from "styled-components";
import { Colors } from "../StyledHelpers/Colors";
import { FontSize } from "../StyledHelpers/FontSize";

export const Wrapper = styled.div`
  display:flex;
  height:20%;
  width: 100%;
  margin-bottom: 1px;
  padding: 15px;
`;

export const PublicationImage = styled.div`
  height: 120%;
  width: 150px;
  background: url("${(props: {thumbnailSrc: string}) => props.thumbnailSrc}");
  background-size: cover;
`;

export const PublicationContent = styled.div`
`;

export const Title = styled.h3`
  font-size: ${FontSize[20]};
  padding-bottom: 35px;
  color:${Colors.white};
  text-decoration: none;
`;

export const WhoAndWhen = styled.div`
  display: flex;
  font-size: ${FontSize[16]};
  align-items: center;
  height: fit-content;
`;

export const CreationDate = styled.div`
  color: ${Colors.black};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const ProfileImage = styled.img`
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
`;