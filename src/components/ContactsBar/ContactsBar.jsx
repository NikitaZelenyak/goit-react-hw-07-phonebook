import {  Outlet } from "react-router-dom"
import { Nav, Link, Wrap,Title } from "./ContactsBar.styled"
import { MdFavoriteBorder, MdOutlineWork,MdContactPhone} from 'react-icons/md'
import { FaHome, } from 'react-icons/fa'
import { GiThreeFriends, } from 'react-icons/gi'


export const ContactsBar = () => {
    return (
       
        <Wrap>
            
            <Nav>  
                <Link to='allContacts'>Contacts<MdContactPhone size={14} /></Link>
                <Link to='favorites'>Favorites<MdFavoriteBorder size={14} /></Link>
                <Link to='family'>Family<FaHome size={14} /></Link>
                <Link to='work'>Work<MdOutlineWork size={14} /></Link>
                <Link to='friends'>Friends<GiThreeFriends size={14} /></Link>  
            </Nav>        
            <Outlet></Outlet>
            <Title>Select  group of contacts</Title>        
        </Wrap>
    )
}
