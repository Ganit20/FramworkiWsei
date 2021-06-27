import {FC, FormEvent, useState} from "react";
import styled from "styled-components";
import {Chat, FileRichtext, Person, Plus} from "react-bootstrap-icons";
import {useCustomEventListener} from "react-custom-events";
import {EditMode} from "../../GlobalData/ProfileAdditionalInfoData";
import UsersDropdown from "./UserDropdown";
import {ISingleUser} from "../../Model/ISingleUser";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";
import { Button,Wrapper,Section, SectionTitle, SectionBody, Attachment, AttachmentBody, Correspondent, CorrespondentBody, CorrespondentImage, CorrespondentFullName } from "../../StyledComponents/Profile/ProfileInformation";


interface ICorrespondent {
    id: number;
    name: string;
    photoUrl: string;
}

interface IData {
    hourlyFee: number;
    attachments: string[];
    correspondents: ICorrespondent[];
}

interface Props {
    editMode: boolean;
}

const HourlyFeeInput = styled.input`
  border: 1px solid ${Colors.lightGray};
`;

const ProfileInformations: FC<Props> = (props) => {
    const [data, setData] = useState<IData>({
        hourlyFee: 610,
        attachments: [
            'the_one_to_rule_them_all.pdf'
        ],
        correspondents: [
            {
                id: 5,
                name: 'Firstname Lastname',
                photoUrl: './images/sas.jpg'
            },
            {
                id: 6,
                name: 'Firstname Lastname',
                photoUrl: './images/sas.jpg'
            }
        ]
    });
    const [dataCopy, setDataCopy] = useState<IData>({...data});

    useCustomEventListener(EditMode.EnteredEditMode, () => {
        setDataCopy({...data});
    });

    useCustomEventListener(EditMode.Saved, () => {
    });

    useCustomEventListener(EditMode.Discarded, () => {
        setData({...dataCopy});
    });

    const handleHourlyFeeInput = (ev: FormEvent<HTMLInputElement>) => setData({...data, hourlyFee: +(ev.target as HTMLInputElement).value});

    const onAttachmentAdd = (name: string) => {
        setData({
            ...data,
            attachments: [
                ...data.attachments,
                name
            ]
        })
    };

    const onCorrespondentAdd = (user: ISingleUser) => {
        setData({
            ...data,
            correspondents: [
                ...data.correspondents,
                {
                    id: user.id,
                    name: user.name,
                    photoUrl: user.photo.thumbnailUrl
                }
            ]
        })
    };

    return (
        <Wrapper>
            <h2>Panel informations</h2>
            <br></br>
            <Section>
                <SectionTitle>Hourly fee</SectionTitle>
                <SectionBody>
                    {props.editMode ?
                        (<HourlyFeeInput value={data.hourlyFee} onInput={handleHourlyFeeInput} />) :
                        data.hourlyFee
                    } €/hour (Negociated)
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Terms & conditions</SectionTitle>
                <SectionBody>Monthly 10k€ retainer - see with Jeanny Smith</SectionBody>
                {data.attachments.map(attachment => {
                    return (
                        <Attachment>
                            <AttachmentBody>
                                <FileRichtext />
                                {attachment}
                            </AttachmentBody>
                        </Attachment>
                    );
                })}
            </Section>
            <Section>
                <h3>Services & projects</h3>
                <SectionBody>Corporate M&A and international acquisitions</SectionBody>
            </Section>
            <Section>
                <h3>Internal correspondents</h3>
                <SectionBody>
                    {data.correspondents.map(correspondent => {
                        return (
                            <Correspondent>
                                <CorrespondentBody>
                                    <CorrespondentImage src={correspondent.photoUrl} alt="userphoto"/>
                                    <CorrespondentFullName>
                                        {`${correspondent.name}`}
                                    </CorrespondentFullName>
                                    <Button>
                                        <Chat />
                                        Message
                                    </Button>
                                    <Button>
                                        <Person/>
                                        Profile
                                    </Button>
                                </CorrespondentBody>
                            </Correspondent>
                        )
                    })

                    }
                    {props.editMode &&
                        (<UsersDropdown onAdd={onCorrespondentAdd} />)
                    }
                </SectionBody>
            </Section>
        </Wrapper>
    );
}

export default ProfileInformations;
