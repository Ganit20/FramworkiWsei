import {FC, FormEvent, useState} from "react";
import {useSelector} from "react-redux";
import {IState} from "../../Reducers";
import {IUsersReducer} from "../../Reducers/UsersReducer";
import {Plus} from "react-bootstrap-icons";
import {ISingleUser} from "../../Model/ISingleUser";
import { Button, DropDownWrapper, Select } from "../../StyledComponents/Profile/Profile";


interface Props {
    onAdd: (selectedUser: ISingleUser) => void;
}

const UserDropdown: FC<Props> = (props) => {
    const users = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
    }));

    const [selectedUser, setSelectedUser] = useState<ISingleUser|null>(null);

    if (users && selectedUser == null) {
        setSelectedUser(users.usersList[0]);
    }

    const selectHandler = (ev: FormEvent<HTMLSelectElement>) => {
        const target = ev.target as HTMLSelectElement;
        const userSelection = users.usersList.filter(user => user.id == +target.value);

        setSelectedUser(userSelection[0]);
    }

    const submitHandler = () => {
        if (selectedUser) {
            props.onAdd(selectedUser);
        }
    }

    return (
        <DropDownWrapper>
            <Select onChange={selectHandler}>
                {users.usersList.map(user => {
                    return (<option value={user.id}>{user.name}</option>)
                })}
            </Select>
            <Button onClick={submitHandler}>
                <Plus />
                Add
            </Button>
        </DropDownWrapper>
    );
}

export default UserDropdown;
