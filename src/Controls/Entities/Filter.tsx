import {Dispatch, FC, SetStateAction} from "react";
import styled from "styled-components";
import { MainFilter, Row } from "../../StyledComponents/Entities";
import {IFilter} from "./Entities";



interface Props {
    options: IFilter[];
    setOptions: Dispatch<SetStateAction<IFilter[]>>;
}

const Filter: FC<Props> = (props) => {

    const addNew = () => {
        const newOption: IFilter = {
            id: `${Math.random()}`,
            field: 'Company',
            operator: 'Is',
            value: ''
        };

        props.setOptions([...props.options, newOption]);
    }

    const removeOption = (optionId: string) => {
        const newOptions = props.options.filter(option => option.id != optionId);
        props.setOptions(newOptions);
    }

    return (
        <MainFilter>
            {props.options.map(option => (
               <div data-id={option.id}>
                   <button onClick={() => removeOption(option.id)}>X</button>
                   Where
                   <select>
                       <option value='Status'>Company</option>
                       <option value='Company'>Status</option>
                   </select>
                   <select>
                       <option value='is'>Is</option>
                       <option value='contains'>Contains</option>
                   </select>
                   <input placeholder='Value' />
               </div>
            ))}
            <Row>
                <button onClick={addNew}>Add Filter</button>
            </Row>
        </MainFilter>
    );
};

export default Filter;
