import {FC, FormEvent, useState} from "react";
import styled from "styled-components";
import defaultSections, {ICell, ISection} from "../../GlobalData/ProfileAdditionalInfoData";
import {Pencil} from "react-bootstrap-icons";
import { Colors } from "../../StyledHelpers/Colors";
import { FontSize } from "../../StyledHelpers/FontSize";
import { InnerWrapperTitle, InnerWrapperBody, Cell, AddButton,Wrapper, Input,InnerWrapper  } from "../../StyledComponents/AdditionalInfoStyledComponent";




const ProfileAdditionalInfo: FC = () => {
    const [sectionsCopy, setSectionsCopy] = useState<ISection[]>([...defaultSections]);
    const [sections, setSections] = useState<ISection[]>([...defaultSections]);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [addMode, setAddMode] = useState<string|boolean>(false);

    const editModeHandler = () => {
        const entersEditMode = !editMode;

        if (entersEditMode) {
            setSectionsCopy([...sections]);
        } else {
            setAddMode(false);
        }

        setEditMode(!editMode);
    }

    const saveHandler = () => {
        setEditMode(false);
        setAddMode(false);
    };

    const discardHandler = () => {
        setSections([...sectionsCopy]);
        setEditMode(false);
        setAddMode(false);
    };

    const addHandler = (sectionName: string) => {
        if (addMode == sectionName) {
            const input = document.querySelector(`input[name=${sectionName}]`) as HTMLInputElement;

            if (!input.value) return;

            const newCell: ICell = {
                name: input.value
            };


            setSections([...sections.map(section => {
                if (section.name != sectionName) {
                    return section;
                }

                return {
                    name: section.name,
                    cells: [...section.cells, newCell]
                };
            })]);

            setAddMode(false);
            return;
        }
        setAddMode(sectionName);
    }

    const deleteHandler = (e: FormEvent<HTMLButtonElement>, sectionName: string, cellName: string) => {
        setSections([...sections.map(section => {
            if (section.name != sectionName) {
                return section;
            }

            return {
                name: section.name,
                cells: section.cells.filter(cell => {
                    return cell.name != cellName;
                })
            };
        })]);
    };


    return (
        <Wrapper>
            <div className="buttons">
                {editMode ?
                    (
                        <>
                            <button onClick={discardHandler}>Discard</button>
                            <button onClick={saveHandler}>Save</button>
                            
                        </>
                    ) :
                    (
                        <>
                            <button onClick={editModeHandler}>
                                <Pencil />
                            </button>
                        </>
                    )
                }
            </div>
            {sections.map(section => (
                <InnerWrapper>
                    <InnerWrapperTitle>{section.name}</InnerWrapperTitle>
                    <InnerWrapperBody>
                        {section.cells.map(cell => (
                            <Cell>
                                {cell.name}
                                {editMode &&
                                    (<button onClick={(e) => deleteHandler(e, section.name, cell.name)}>X</button>)
                                }
                            </Cell>
                        ))}
                        {editMode &&
                            (
                                <>
                                    {addMode == section.name &&
                                        (<Input name={section.name} />)
                                    }
                                    <AddButton onClick={() => addHandler(section.name)}>+</AddButton>
                                </>
                            )
                        }
                    </InnerWrapperBody>
                </InnerWrapper>
            ))}
        </Wrapper>
    );
}

export default ProfileAdditionalInfo;
