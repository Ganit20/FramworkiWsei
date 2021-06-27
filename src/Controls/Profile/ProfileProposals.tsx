import {FC, FormEvent, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {useCustomEventListener} from "react-custom-events";
import {EditMode} from "../../GlobalData/ProfileAdditionalInfoData";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";
import { Wrapper, Input,Table } from "../../StyledComponents/Profile/ProfileProposal";
import { data, emptyRecord } from "../../GlobalData/ProfileProposal";
import { IProposal } from "../../Model/IProposal";




interface Props {
    editMode?: boolean;
}

const ProfileProposals: FC<Props> = (props) => {


    const [proposals, setProposals] = useState<IProposal[]>(data);
    const [proposalsCopy, setProposalsCopy] = useState<IProposal[]>(data);
    const [proposalRecord, setProposalRecord] = useState<IProposal>({...emptyRecord});

    const inputHandler = (ev: FormEvent<HTMLInputElement>) => {
        const target = ev.target as HTMLInputElement;

        setProposalRecord({
            ...proposalRecord,
            [target.name]: target.value
        });
    };

    const submitHandler = () => {
        setProposals([
            ...proposals,
            proposalRecord
        ]);
        setProposalRecord({...emptyRecord});
    };

    useCustomEventListener(EditMode.EnteredEditMode, () => {
        setProposalsCopy([...proposals]);
    });

    useCustomEventListener(EditMode.Saved, () => {
    });

    useCustomEventListener(EditMode.Discarded, () => {
        setProposals([...proposalsCopy]);
    });

    return (
        <Wrapper>
            <h2>Proposals</h2>
            <Table>
                <thead>
                    <tr className="header">
                        <th>Name</th>
                        <th>Entity</th>
                        <th>Location</th>
                        <th>Expertise</th>
                        <th>Date</th>
                        <th>Firm</th>
                    </tr>
                </thead>
                <tbody>
                    {proposals.map(proposal => {
                        return (
                            <tr>
                                <td>{proposal.name}</td>
                                <td>{proposal.entity}</td>
                                <td>{proposal.location}</td>
                                <td>{proposal.expertise}</td>
                                <td>{proposal.date}</td>
                                <td>{proposal.firm}</td>
                            </tr>
                        );
                    })}

                    {props.editMode &&
                        (
                            <>
                                <tr>
                                    <td><Input name='name' value={proposalRecord.name} onInput={inputHandler} /></td>
                                    <td><Input name='entity' value={proposalRecord.entity} onInput={inputHandler} /></td>
                                    <td><Input name='location' value={proposalRecord.location} onInput={inputHandler} /></td>
                                    <td><Input name='expertise' value={proposalRecord.expertise} onInput={inputHandler} /></td>
                                    <td><Input name='date' value={proposalRecord.date} onInput={inputHandler} /></td>
                                    <td><Input name='firm' value={proposalRecord.firm} onInput={inputHandler} /></td>
                                </tr>
                                <tr>
                                    <td colSpan={6}>
                                        <button onClick={submitHandler}>+ Add</button>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
            </Table>
            <div className='a'>
                <Link to='#'>See more proposals</Link>
            </div>
        </Wrapper>
    );
}

export default ProfileProposals;
