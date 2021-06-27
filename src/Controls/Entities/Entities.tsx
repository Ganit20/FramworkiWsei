import {FC, FormEvent, useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {Colors} from "../../StyledHelpers/Colors";
import {FontSize} from "../../StyledHelpers/FontSize";
import {IPhoto} from "../../Model/IPhoto";
import useDropdown from "react-dropdown-hook";
import Filter from "./Filter";
import _, { isObject } from "lodash";
import { getPhoto } from "../../Api/ApiFunctions";
import * as entitiesStyle from "../../StyledComponents/Entities"

interface Entity {
    name: string;
    address: string;
    photo: string;
}
export interface IFilter {
    id: string;
    field: string;
    operator: string;
    value: string;
}
const Entities: FC = () => {
    const [sort, setSort] = useState('AZ');
    const [initialized, setInitialized] = useState(false);
    const [displayType, setDisplayType] = useState<number>(0);
    const [filtersChanged, setFiltersChanged] = useState(false);
    const [followedFilter, setFollowedFilter] = useState(false);
    const [titleFilter, setTitleFilter] = useState('');
    const [filterRef, filtersOpen, toggleFilters] = useDropdown();
    const [entities, setEntities] = useState<Entity[]>([]);
    const [options, setOptions] = useState<IFilter[]>([]);
    const [genericEntities, setGenericEntities] = useState<Entity[]>([]);

    useEffect(() => {
        const fillEntities = async () => {
            const ent: Entity[] = [];
            for (let i = 1; i <= 12; i++) {
                const entity: Entity = {
                    name: "Company",
                    address: `adres`,
                    photo: './images/subsid.jpg',
                };
                ent.push(entity);
                const entity2: Entity = {
                    name: "ForFiltersTest",
                    address: `adres`,
                    photo: './images/subsid.jpg',
                };
                ent.push(entity2);
            }
            const compare = (a: Entity, b: Entity) => {
                if (a.name[0] < b.name[0]) return -1;
                if (a.name[0] > b.name[0]) return 1;
                return 0;
            }
            ent.sort(compare);
            setEntities(ent);
            setGenericEntities(ent);
            setInitialized(true);
        }

        if (!initialized) {
            fillEntities();
        }

        if (filtersChanged) {
            applyFilters();
            setFiltersChanged(false);
        }
    });

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    const toggleSort = () => {
        setSort(sort == 'AZ' ? 'ZA' : 'AZ');
        setFiltersChanged(true);
    };
    const handleTitleFilterInput = (ev: FormEvent) => {
        const target = ev.target as HTMLInputElement;
        setTitleFilter(target.value);
        setFiltersChanged(true);
    };
   
    const applyFilters = () => {
        let collection = [...genericEntities];
        if(titleFilter.length > 0) {
            collection = collection.filter(entity => entity.name.toLowerCase().includes(titleFilter.toLowerCase()));
        }
        if(sort == 'ZA') {
            collection = collection.reverse();
        }
        setEntities([...collection]);
    };

    return (
        <entitiesStyle.Wrapper>
            <entitiesStyle.Header>
                <div className='pageTitle'>Entities</div>
                <div className='displayTypeButtonsContainer'>
                    <button onClick={() => setDisplayType(0)}> {displayType == 0 ? 'Mosaic' : 'Mosaic'}</button> 
                    <button onClick={() => setDisplayType(1)}> {displayType == 1 ? 'List' : 'List'}</button>
                </div>
            </entitiesStyle.Header>

            <entitiesStyle.Filters>
                <div>
                    <button onClick={toggleSort} >{sort == 'AZ' ? (<div/>) : (<div/>)} Sort</button>
                    <button  onClick={toggleFilters}>Filter</button>
                    <button onClick={copyLink}> Share</button>
                </div>

                <div className="innerFilterWrapper">
                    <div> {filtersOpen && <Filter options={options} setOptions={setOptions} />}</div>
                    <entitiesStyle.TitleFilter onInput={handleTitleFilterInput} placeholder='Search...' />
                </div>
            </entitiesStyle.Filters>

            <entitiesStyle.Content displayType={displayType}>
                {entities.map(entity => (
                    <entitiesStyle.Card>
                        <img className='entityImage' src={entity.photo} />
                        <div className="textContainer">
                            <div className="entityName">{entity.name}</div>
                            <div className="entityAddress">{entity.address}</div>
                        </div>
                    </entitiesStyle.Card>
                ))}
            </entitiesStyle.Content>
        </entitiesStyle.Wrapper>
    );
}
export default Entities;
