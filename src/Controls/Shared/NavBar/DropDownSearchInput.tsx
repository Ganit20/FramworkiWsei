import { ChangeEvent, FC, useState } from "react"
import * as cm from "../../../StyledComponents/DropDownMenuStyledComponent";
import { DropDownMenuItem } from "./DropDownMenuItem";
export const DropDownSearchInput:FC = () => {

    const [searchText, setInputText] = useState<string>('');
    const searchTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    return(  <cm.InnerWarpper>
                <div id="filterInput">
                <input type="text" value={searchText} onChange={searchTextChanged} placeholder="Search..." />
            </div>
                <cm.MenuItem><p>Platform</p></cm.MenuItem>
               <DropDownMenuItem src='./icons/house2.png' text ='Home' searchText={searchText} href='/'/>
               <DropDownMenuItem src='./icons/people.png' text ='Profile' searchText={searchText} href='/profile'/>
               <DropDownMenuItem src='./icons/publications.png' text ='Publication' searchText={searchText} href='publication'/>
               <DropDownMenuItem src='./icons/people.png' text ='People' searchText={searchText} href='people'/>
               <DropDownMenuItem src='./icons/entities2.png' text ='Entities' searchText={searchText} href='entities'/>
               <DropDownMenuItem src='./icons/Administration.png' text ='Administration' searchText={searchText} href='administration'/>
               <DropDownMenuItem src='./icons/entities2.png' text ='Client contract' searchText={searchText} href='client_contract'/>
                </cm.InnerWarpper>
            );
}