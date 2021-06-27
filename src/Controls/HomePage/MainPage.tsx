import {FC, useEffect} from 'react';
import styled from 'styled-components';
import TopBar from '../Shared/NavBar/NavBar';
import LeftMenu from "../Shared/LeftMenu";
import Center from './MainBody';
import {Colors} from "../../StyledHelpers/Colors";
import { getPublications, getUsers, getWorks } from '../../Api/ApiFunctions';
import { useDispatch } from "react-redux";


const Wrapper = styled.section`
    background-color: ${Colors.lightGray};
`;

const Content = styled.div`
    display:flex;
    max-width: 100%;
    min-height:1800px;
    height: fit-content;
    justify-content:center;
`;

const MainPage: FC = () => {
    const dispatch = useDispatch();
    type GetUsers = ReturnType<typeof getUsers>;
    type GetPublications = ReturnType<typeof getPublications>;
    type GetWorks = ReturnType<typeof getWorks>;

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetPublications>(getPublications());
        dispatch<GetWorks>(getWorks());
    });
    
    return ( 
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <Center/>
            </Content>
        </Wrapper>
    );
};

export default MainPage;

