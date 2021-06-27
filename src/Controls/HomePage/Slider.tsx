import {FC} from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import WorkspaceData from "../../GlobalData/WorkspacesData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as cm from "../../StyledComponents/SliderStyledComponent";


const SliderElement: FC = () => {
    const workspaceData = WorkspaceData;

    
    
        const handleCardClick = () => {
            window.location.href = `/workspace`;
        }
    return (
        
        <cm.MainWrapper>
            <Slider {...cm.settings}>
                {workspaceData.map((workspace) => {
                    return (
                        <cm.Wrapper onClick={handleCardClick}>
                            <cm.BackgroundImage bannerUrl={workspace.bannerUrl}/>
                                <cm.TypeImage src={`./icons/${workspace.icon}.jpg`} />
                                    <cm.Title>{workspace.title}</cm.Title>
                                    <cm.Information>
                                      <cm.Data>
                                     <cm.InformationIcon src={`./icons/${workspace.icon}.jpg`} />
                                        {workspace.type} • 
                                     <img src='./icons/people.png'/>
                                     {workspace.users} users
                                      </cm.Data>
                                 <cm.LastUpdated>
                                   Updated: {workspace.lastUpdated}
                                 </cm.LastUpdated>
                             </cm.Information>
                             </cm.Wrapper>
                    );
                })}
            </Slider>
        </cm.MainWrapper>
    );
}
export default SliderElement;