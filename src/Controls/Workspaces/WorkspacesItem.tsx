import {FC} from "react";
import styled from "styled-components";
import {IWorkspacesUpdate} from "../../Model/IWorkspacesUpdate";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";
import * as cm from "./../../StyledComponents/WorkspaceItemStyledComponent";



interface WorkspacesItemProps {
    update: IWorkspacesUpdate;
    className?: string;
}

const WorkspacesItem: FC<WorkspacesItemProps> = (props) => {
    return (
        <cm.Wrapper >
            <cm.Title >{props.update?.name}</cm.Title>
            <cm.Content >{props.update?.body}</cm.Content>
            <cm.Information >
                <cm.Company>{props.update?.type}</cm.Company>
                <cm.Updated>Updated 3 days ago by Glenna Reichert</cm.Updated>
            </cm.Information>
        </cm.Wrapper>
    );
}

export default WorkspacesItem;
