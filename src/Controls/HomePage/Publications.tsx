import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import PublicationElement from "./PublicationElement";
import MainPublication from "./MainPublication";
import {useSelector} from "react-redux";
import {IState} from "../../Reducers";
import {IPublicationsReducer} from "../../Reducers/PublicationsReducer";
import * as cm from "../../StyledComponents/PublicationStyledComponents";

const LatestPublications: FC = () => {
    const { latestPublications } = useSelector<IState, IPublicationsReducer>(state => ({
        ...state.publications
    }));

    return (
        <cm.MainWrapper id='latest-publications-wrapper'>
            <cm.MainPublicationWrapper>
                <MainPublication publication={latestPublications[0]}/>
            </cm.MainPublicationWrapper>
            <cm.Publications>
                <cm.styledH2>Latest publications</cm.styledH2>
                <div>
                    {latestPublications.slice(1, 4).map((publication) => {
                        return (
                            <PublicationElement publication={publication}/>
                        );
                    })}
                </div>
                <Link to="/publications" id="link" style={{ paddingLeft:15, color: 'black', textDecoration: 'none'}}>See more publications</Link>
            </cm.Publications>
        </cm.MainWrapper>
    );
}

export default LatestPublications;
