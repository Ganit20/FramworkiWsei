import { ChangeEvent, ChangeEventHandler, FC, useState } from "react";
import useDropdown from 'react-dropdown-hook';
import { useSelector } from "react-redux";
import * as cm from "../../../StyledComponents/DropDownMenuStyledComponent";
import { IUsersReducer } from '../../../Reducers/UsersReducer';
import { IState } from '../../../Reducers/index';
import { DropDownSearchInput } from "./DropDownSearchInput";


 export const DropDownMenu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const { currentUser } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));
    
    
	return (
        <cm.MainWrapper ref={wrapperRef}>
            <cm.MenuToTogge onClick={toggleDropdown} className='zxcz'>
                <cm.Icon>               
                     <img src='./icons/house2.svg' alt="Home page" />
                </cm.Icon>
                <cm.Text>
                    Home
                </cm.Text>
                <cm.Arrow>
                    <img src='./icons/arrow-down.svg' alt="Drop down menu arrow"></img>
                </cm.Arrow>
            </cm.MenuToTogge>
            {dropdownOpen && <>
             <cm.ToggleWrapper>
            <DropDownSearchInput/>
            <cm.AccountWrapper>
            <p id="Account">Account</p>
            <cm.ProfileWrapper>      
                <cm.ProfileWindow>
                    <img src={currentUser?.photo.thumbnailUrl}/>
                    <cm.Name>
                        <p>{currentUser?.name}</p>
                    </cm.Name>
                    <cm.Occupation>
                        <a href="/profile">See Profile</a>
                    </cm.Occupation>
                </cm.ProfileWindow>        
                <cm.PrivacyAndSettings>
                <div id="Privacy">
                    <img src="./icons/privacy.png"></img>
                    <a>Privacy</a>
                </div>
                <div id="Settings">
                    <img src="./icons/settings.png"></img>
                    <a >Settings</a>
                </div>
            </cm.PrivacyAndSettings>
           </cm.ProfileWrapper> 

           

        </cm.AccountWrapper>
        </cm.ToggleWrapper>
                </> 
        }
        </cm.MainWrapper>
	)
}
