import React, {Dispatch, FC, SetStateAction, useState} from "react";
import styled from "styled-components";
import { Colors } from "../../StyledHelpers/Colors";
import {useSelector} from "react-redux";
import {IState} from "../../Reducers";
import {IUsersReducer} from "../../Reducers/UsersReducer";
import {Link} from "react-router-dom";
import {Briefcase, Chat, FileEarmarkRichtext, Pencil} from "react-bootstrap-icons";
import {emitCustomEvent} from "react-custom-events";
import {EditMode} from "../../GlobalData/ProfileAdditionalInfoData";

import { TopButtons, UserInnerWrapper, ProfilePictureWrapper, ProfilePicture,Wrapper, Input,Button } from "../../StyledComponents/Profile/ProfileHeaderStyle";

interface ProfileHeaderProps {
    className?: string;
    editMode: boolean;
    setEditMode: Dispatch<SetStateAction<boolean>>;
}

interface IUserCopy {
    [key: string]: string;
    name: string;
    companyName: string;
    city: string;
    email: string;
    status: string;
    phone: string;
}

const ProfileHeader: FC<ProfileHeaderProps> = (prop) => {
    
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const makeUserCopy = (): IUserCopy|null => {
        console.log(currentUser);
        if (!currentUser) return null;

        return {
            name: currentUser.name,
            companyName: currentUser.company.name,
            city: currentUser.address.city,
            email: currentUser.email,
            phone: currentUser.phone,
            status: 'Partner'
        };
    };

    const [user, setUser] =  useState<IUserCopy|null>(() => makeUserCopy());
    const [userCopy, setUserCopy] = useState<IUserCopy|null>(() => makeUserCopy());

    if (user === null && currentUser) {
        setUser(() => makeUserCopy());
    }

    const saveChanges = () => {
        prop.setEditMode(false);
        emitCustomEvent(EditMode.Saved);
    }

    const discardChanges = () => {
        if (!currentUser) return;
        if (userCopy) {
            setUser({...userCopy});
        }
        prop.setEditMode(false);
        emitCustomEvent(EditMode.Discarded);
    }

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;

        if (user) {
            const newUserData = {...user};
            newUserData[target.name] = target.value;
            setUser(newUserData);
        }
    };

    const changeEditMode = () => {
        if (!user) return;
        const entersEditMode = !prop.editMode;
        if (entersEditMode) {
            setUserCopy({...user});
            emitCustomEvent(EditMode.EnteredEditMode);
        }
        prop.setEditMode(!prop.editMode);
    };

    return (
        <Wrapper className={prop?.className}>
            <TopButtons>
                <Button>
                    <Chat/> Message
                </Button>
                <Button>
                    <FileEarmarkRichtext />
                    Create a request
                </Button>
                <Button>
                    <Briefcase />
                    Add to a cluster
                </Button>
                <Button>
                    <Link to='/'>X</Link>
                </Button>
            </TopButtons>

            <UserInnerWrapper>
                <ProfilePictureWrapper>
                    <ProfilePicture src={currentUser?.photo.thumbnailUrl}/>
                </ProfilePictureWrapper>
              
                <div className="contanier">
                    <div className="userInfo">
                        <div>
                            {prop.editMode ?
                                (<Input value={user?.name} name='name' onInput={handleInput} />):(user?.name)
                            }
                        </div>
                        <div>
                            {prop.editMode ?
                                (<Input value={user?.companyName} name='companyName' onInput={handleInput}/>):(user?.companyName)
                            }
                        </div>
                        <div/>
                        <div>
                            {prop.editMode ?
                                (<Input value={user?.city} name='city' onInput={handleInput}/>):(user?.city)
                            }
                        </div>
                      
                        <div>
                        {prop.editMode ?
                            (<Input value={user?.status} name='status' onInput={handleInput}/>):(user?.status)
                        }
                        </div>
                    </div>

                    <div>
                        <div className="editmode">
                            {prop.editMode ?
                                (
                                    <>
                                        <button onClick={saveChanges}>Save</button>
                                        <button onClick={discardChanges}>Discard</button>
                                    </>
                                ) : (
                                    <button onClick={changeEditMode}>
                                        <Pencil />
                                    </button>
                                )
                            }
                        </div>

                        <div>
                            {prop.editMode ?
                                (<Input value={user?.email} name='email' onInput={handleInput}/>):(user?.email)
                            }
                        </div>
                        <div>
                            {prop.editMode ?
                                (<Input value={user?.phone} name='phone' onInput={handleInput}/>):(user?.phone)
                            }
                        </div>
                    </div>
                </div>
            </UserInnerWrapper>
        </Wrapper>
    );
}

export default ProfileHeader;
