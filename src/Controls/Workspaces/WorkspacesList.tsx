import React, {FC, useEffect, useState} from "react";
import styled  from "styled-components";
import WorkspacesLatestUpdatesItem from "./WorkspacesItem";
import WorkspacesFilterButton from "./WorkspacesFilters";
import WorkspacesFilterButtons from "../../GlobalData/WorkspacesFilterButtons";
import {useSelector} from "react-redux";
import {IState} from "../../Reducers";
import {IWorkspacesUpdatesReducer} from "../../Reducers/workspacesUpdatesReducer";
import {WorkspacesDataFilter} from "./WorkspacesDataFilter";
import {IWorkspacesUpdate} from "../../Model/IWorkspacesUpdate";
import { FontSize } from "../../StyledHelpers/FontSize";
import { Colors } from "../../StyledHelpers/Colors";
import { Content, FilterButtons, Filters, Header, TitleFilter, Wrapper } from "../../StyledComponents/WorkspaceList";



const WorkspacesList: FC = () => {
    const { workspacesUpdates } = useSelector<IState, IWorkspacesUpdatesReducer>(state => ({
        ...state.workspacesUpdates
    }));

    const workspacesUpdatesDataProvider = new WorkspacesDataFilter(workspacesUpdates);
    const [titleFilter, setTitleFilter] = useState('');
    const [workspacesUpdatesData, setWorkspacesUpdatesData] = useState<IWorkspacesUpdate[] | null>(() => workspacesUpdatesDataProvider.getFiltered());
  
    useEffect(() => {
      if (workspacesUpdatesData === null) {
          const wudp = new WorkspacesDataFilter(workspacesUpdates);
          setWorkspacesUpdatesData(wudp.getFiltered());
      }
    })

    const handleTitleFilterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(event.target.value);
        workspacesUpdatesDataProvider.titleFilter(event.target.value);
        setWorkspacesUpdatesData(workspacesUpdatesDataProvider.getFiltered());
    }
    const handleButtonFilterClick = (event: React.MouseEvent, typeName: string) => {
        workspacesUpdatesDataProvider.typeFilter(typeName);
        setWorkspacesUpdatesData(workspacesUpdatesDataProvider.getFiltered());
    }

    return (
        <Wrapper>
            <Header>
                <h2>Latest updates</h2>
                <Filters>
                    <TitleFilter onInput={handleTitleFilterInput} placeholder='Search...' />
                </Filters>
            </Header>
            <FilterButtons>
                {WorkspacesFilterButtons.map(button => (
                    <WorkspacesFilterButton name={button.name} color={button.color} iconName={button.iconName} onClick={handleButtonFilterClick} />
                ))}
            </FilterButtons>
            <Content>
                {workspacesUpdatesData?.slice((4 * 1), 4 * 3).map(entry => {
                    return (
                        <WorkspacesLatestUpdatesItem key={entry.id} update={entry} />
                    )
                })}
            </Content>
        </Wrapper>
    );
}
export default WorkspacesList;