import {FC} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {IPublication} from "../../Model/IPublication";
import {FontSize} from '../../StyledHelpers/FontSize';
import {Colors} from '../../StyledHelpers/Colors'
import * as cm from "../../StyledComponents/MainPublicationsStyledComponent";



interface PublicationProps {
    className?: string;
    publication: IPublication
}

const MainPublication: FC<PublicationProps> = (props) => {
  return (
    <cm.Wrapper className={props.className}>
      <div>
          <Link to="#">
              <cm.PublicationImage thumbnailSrc={props.publication?.thumbnailUrl} />
          </Link>
      </div>
      <cm.PublicationContent>
          <cm.Title >
            <Link to="#" style={{color: 'white', textDecoration: 'none'}}>
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

export default MainPublication;
