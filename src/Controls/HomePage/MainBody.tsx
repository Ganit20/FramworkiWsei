import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../StyledHelpers/Colors";
import { FontSize } from '../../StyledHelpers/FontSize';
import SliderElement from './Slider';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import { MainPageWrapper } from '../../StyledComponents/Entities';
import LatestPublications  from './Publications';
import BottomContainer from './Posts';
import Workspaces from '../Workspaces/Workspaces';
import Entities from '../Entities/Entities';
import Profile from '../Profile/Profile';


 

const MainBody: FC = () => {
    return ( 
        <MainPageWrapper>
            <Router>
                 <Switch>

                    <Route exact path="/">
                        <LatestPublications/>
                        <span>Workspaces</span>
                        <SliderElement/>
                        <span>Resume your work</span>
                        <BottomContainer/>
                    </Route>
                   
                    <Route path="/workspace">
                        <Workspaces/>
                    </Route>

                     <Route path="/profile">
                        <Profile/>
                    </Route>
                    
                    <Route path="/entities">
                        <Entities/>
                    </Route>
                    <Route path="/publication">
                        404
                    </Route>
                    <Route path="/people">
                        404
                    </Route>
                    <Route path="/administration">
                        404
                    </Route>
                    <Route path="/client_contract">
                        404
                    </Route>
                    <Route path="/supplier_contract">
                        404
                    </Route>
                    <Route path="/corporate">
                        404
                    </Route>
                    <Route path="/group_norms">
                        404
                    </Route>
                    <Route path="/real_estate_contracts">
                        404
                    </Route>
                </Switch>    
            </Router>
        </MainPageWrapper>
    );
};
export default MainBody;