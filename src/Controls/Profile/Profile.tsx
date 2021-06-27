import {FC, useEffect,useState} from "react";
import {useDispatch} from "react-redux";
import ProfileHeader from "./ProfileHeader";
import ProfileInformations from "./ProfileInformations";
import ProfileProposals from "./ProfileProposals";
import ProfileAmountOfFees from "./ProfileAmountOfFees";
import ProfileAdditionalInfo from "./ProfileAdditionalInfo";
import { getUsers } from "../../Api/ApiFunctions";
import { MainWrapper } from "../../StyledComponents/DropDownMenuStyledComponent";



const Profilepage: FC = () => {
    const dispatch = useDispatch();

    type GetUsers = ReturnType<typeof getUsers>;

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
    });

    const [editMode, setEditMode] = useState(false);


    return (
        <MainWrapper>
            <ProfileHeader editMode={editMode} setEditMode={setEditMode}/>
            <ProfileAdditionalInfo/>
            <ProfileInformations editMode={editMode}/>
            <ProfileProposals editMode={editMode}/>
            <ProfileAmountOfFees editMode={editMode}/>
        </MainWrapper>
    );
}

export default Profilepage;
