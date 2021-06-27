import { FC } from 'React';
import styled from 'styled-components';
import {Colors} from "../../../StyledHelpers/Colors";
import {DropDownMenu} from "./DropDownMenu";
import * as cm from '../../../StyledComponents/NavBarComponents';


const TopBar: FC = () => {
  const handleLogoClick = () => {
    window.location.href = `/`;
}
    return( 
        <cm.MainWrapper>
            <cm.Logo onClick={handleLogoClick}>
                <img src='./favicon.ico' alt='Logo'/>
            </cm.Logo>
            <DropDownMenu />
            <cm.SearchWrapper>
                <cm.Input placeholder='Search' />
                <cm.SearchIcon />
            </cm.SearchWrapper>
            <cm.Wrapper>
              <cm.NotifyButton href="/">
                <img src="./icons/house.png" alt="Home page"/>
              </cm.NotifyButton>

              <cm.NotifyButton href="/">
                <img src="./icons/comments.png" alt="Comments"/>
              </cm.NotifyButton>

             <cm.NotifyButton href="/">
               <img src="./icons/bell.png" alt="Notify"/>
             </cm.NotifyButton>
           </cm.Wrapper>
        </cm.MainWrapper>
    );
};
export default TopBar;
 