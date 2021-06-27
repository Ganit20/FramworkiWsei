import styled from "styled-components";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";



export const Wrapper = styled.div`
padding: 10px;
`;

export const Section = styled.section`
margin-bottom: 20px;
`;

export const SectionTitle = styled.div`
color: ${Colors.gray};
font-size: ${FontSize[16]};
`;

export const SectionBody = styled.div`
font-size: ${FontSize[14]};
`;

export const Attachment = styled.div`
background: ${Colors.lightGray};
padding: 5px 8px;
margin: 5px 0;
`;

export const AttachmentBody = styled.div`
width: fit-content;
display: flex;
align-items: center;
grid-template-columns: auto auto;
gap: 2px;
`;

export const Correspondent = styled(Attachment)`
margin-left: 2px;
button{
    border:none;
    background-color: ${Colors.lightGray};
}
`;

export const CorrespondentBody = styled.div`
display: flex;
align-items: center;
`;

export const CorrespondentImage = styled.img`
height: 25px;
border-radius: 50%;
`;

export const CorrespondentFullName = styled.div`
margin-left: 5px;
`;

export const Button = styled.button`
width: fit-content;
display: flex;
gap: 7px;
align-items: center;
margin-left: 40px;
`;