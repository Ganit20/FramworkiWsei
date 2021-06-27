import { FC } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IUsersReducer } from '../../Reducers/UsersReducer';
import { IState } from '../../Reducers/index';
import * as cm from '../../StyledComponents/LeftMenuComponents';



const LeftMenu: FC = () => {
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    const handleProfileClick = () => {
        window.location.href = `/profile`;
    }
    return( 
        <cm.Wrapper>  
            <cm.SinglePostWrapper>      
                <cm.ProfileWindow onClick={handleProfileClick}>
                    <img src={currentUser?.photo.thumbnailUrl} alt='Profile picture' />
                    <cm.Name>
                        <p>{currentUser?.name}</p>
                    </cm.Name>
                    <cm.Occupation>
                        <p>Job title - Company</p>
                    </cm.Occupation>
                </cm.ProfileWindow>        
             

                <cm.ProfileButtons> 
                    <cm.Icon><img src="./icons/network.png" alt='network icon'></img></cm.Icon>
                    <cm.Text>Your Network</cm.Text>
                    <cm.Button><img src="./icons/network.svg" alt='network'></img></cm.Button>
                </cm.ProfileButtons>

                <cm.ProfileButtons>
                        <cm.Icon><img src="./icons/publications.svg" alt='publications icon'></img></cm.Icon>
                        <cm.Text>Your Publications</cm.Text>
                        <cm.Button><img src="./icons/plus.svg" alt='plus'></img></cm.Button>
                </cm.ProfileButtons>

           </cm.SinglePostWrapper> 
            <cm.Links>
            <cm.LinkIcon>
                    <img src='./icons/publications.svg' alt='Publications'></img>
                    <a href="/publications"><span>Publications</span></a>
            </cm.LinkIcon>

            <cm.LinkIcon>
                    <img src='./icons/ecosystem.svg' alt='Ecosystem'></img>
                    <a href="/ecosystem"><span>Ecosystem</span></a>
            </cm.LinkIcon>

            <cm.LinkIcon>
                    <img src='./icons/entities.svg' alt='Entities'></img>
                    <a href="/entities"><span>Entities</span></a>
            </cm.LinkIcon>
        </cm.Links>
        </cm.Wrapper>
    );
};
export default LeftMenu;
