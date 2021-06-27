import {FC} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IPublication} from "../../Model/IPublication";
import {FontSize} from '../../StyledHelpers/FontSize';
import {Colors} from '../../StyledHelpers/Colors'
import * as cm from "../../StyledComponents/PublicationElementStyledComponent";

interface PublicationProps {
  className?: string;
  publication: IPublication
}
const PublicationElement: FC<PublicationProps> = (props) => {

  return (
      <cm.Wrapper>
          <div>
              <Link to="#">
                  <cm.PublicationImage thumbnailSrc={props.publication?.thumbnailUrl} />
              </Link>
          </div>
          <cm.PublicationContent>
              <cm.Title>
                  <Link to='#' style={{ color: 'black', textDecoration: 'none'}}>
                      {props.publication?.title}
                  </Link>
              </cm.Title>
              <cm.WhoAndWhen>
                  <cm.CreationDate>
                      {props.publication?.creationDate}
                  </cm.CreationDate>
                  <cm.Profile>
                      <cm.ProfileImage src={props.publication?.author.photo.thumbnailUrl} />
                      {props.publication?.author.name}
                  </cm.Profile>
              </cm.WhoAndWhen>
          </cm.PublicationContent>
      </cm.Wrapper>
  );
}

export default PublicationElement;
