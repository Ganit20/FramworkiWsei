import {FC, FormEvent, useState} from "react";
import styled from "styled-components";
import {useCustomEventListener} from "react-custom-events";
import {EditMode} from "../../GlobalData/ProfileAdditionalInfoData";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";
import { IFee, feeList, emptyFee } from "../../GlobalData/Fees";
import { Wrapper, Input,Table } from "../../StyledComponents/Profile/Profile";




interface Props {
    editMode?: boolean;
}

const ProfileAmountOfFees: FC<Props> = (props) => {
   

    const [proposals, setFee] = useState<IFee[]>(feeList);
    const [proposalsCopy, setFeeCopy] = useState<IFee[]>(feeList);
    const [proposalRecord, setFeeRecord] = useState<IFee>({...emptyFee});

    const inputHandler = (ev: FormEvent<HTMLInputElement>) => {
        const target = ev.target as HTMLInputElement;

        setFeeRecord({
            ...proposalRecord,
            [target.name]: target.value
        });
    };

    const submitHandler = () => {
        setFee([
            ...proposals,
            proposalRecord
        ]);
        setFeeRecord({...emptyFee});
    };

    useCustomEventListener(EditMode.EnteredEditMode, () => {
        setFeeCopy([...proposals]);
    });

    useCustomEventListener(EditMode.Saved, () => {
    });

    useCustomEventListener(EditMode.Discarded, () => {
        setFee([...proposalsCopy]);
    });

    return (
        <Wrapper>
            <h2>Amount of Fees</h2>
            <Table>
                <>
                    <tr className="header">
                        <th>Year</th>
                        <th>Cost center</th>
                        <th>Total amount</th>
                        <th>Law firm</th>
                    </tr>
                </>
                <tbody>
                    {proposals.map(proposal => {
                        return (
                            <tr>
                                <td>{proposal.year}</td>
                                <td>{proposal.cost_center}</td>
                                <td>{proposal.total_amount}</td>
                                <td>{proposal.law_firm}</td>
                            </tr>
                        );
                    })}

                    {props.editMode &&
                        (
                            <>
                                <tr>
                                    <td><Input name='name' value={proposalRecord.year} onInput={inputHandler} /></td>
                                    <td><Input name='entity' value={proposalRecord.cost_center} onInput={inputHandler} /></td>
                                    <td><Input name='location' value={proposalRecord.total_amount} onInput={inputHandler} /></td>
                                    <td><Input name='expertise' value={proposalRecord.law_firm} onInput={inputHandler} /></td>
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
        </Wrapper>
    );
}

export default ProfileAmountOfFees;


