import {FC,useEffect} from "react";
import styled from "styled-components";
import * as topBanner from "../../StyledComponents/WorkspaceTopStyledComponent";
import WorkspacesLatestUpdates from "./WorkspacesList";
import {useDispatch} from "react-redux";
import {getWorkspacesUpdates} from "../../Api/ApiFunctions";


const Wrapper = styled.div``;

const Workspaces: FC = () => {
    const dispatch = useDispatch();

    type GetWorkspacesUpdates = ReturnType<typeof getWorkspacesUpdates>;

    useEffect(() => {
        dispatch<GetWorkspacesUpdates>(getWorkspacesUpdates());
    });

    return (
        <Wrapper>
          <topBanner.Wrapper>
          <topBanner.Header/>
          <topBanner.InnerWrapper>
              <img style={{height: 300}} src="./images/sign3.jpg"/>
              <topBanner.Main>
                  <topBanner.ContentWrapper>
                      <topBanner.Title>Client contract</topBanner.Title>
                  </topBanner.ContentWrapper>
                  <topBanner.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam pariatur fuga quam.
                  </topBanner.Text>
              </topBanner.Main>
          </topBanner.InnerWrapper>
      </topBanner.Wrapper>
            <WorkspacesLatestUpdates/>
        </Wrapper>
    );
}
export default Workspaces;

