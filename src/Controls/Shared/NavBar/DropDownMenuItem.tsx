import { ChangeEvent, FC, useState } from "react"
import * as cm from "../../../StyledComponents/DropDownMenuStyledComponent";
interface ItemProps {
    src:string,
    text:string,
    searchText:string,
    href:string
}
export const DropDownMenuItem:FC<ItemProps> = (props) => {
    return(
        props.text.toLowerCase().includes(props.searchText.toLowerCase()) && <cm.MenuItem ><img src={props.src}/><a href={props.href}>{props.text}</a></cm.MenuItem>)
   
}