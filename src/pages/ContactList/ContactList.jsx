import { Wrapper,List,Label,Input, } from "./ContactList.styled"
import { ContactItem } from "components/ContactItem/ContactItem";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useGetContactsQuery,  } from "redux/ContactsSlice/contactSlice";

export const ContactsList = ({isOpen,setIdContact}) => {
const { data: contacts } = useGetContactsQuery();
    const [filter, setFilter] = useState('');
    const location = useLocation();
    const typeGroupe = location.pathname.substring(1);


  

    const onFilterContacts = (e) => {

        const name = e.currentTarget.value
        setFilter((name));
        
    }

  



    const getVisibleContact = (contacts) => {
    
            const normalizeFilter = filter.toLowerCase().trim();
        return contacts &&  contacts.filter(contact => (contact.name.toLowerCase().includes(normalizeFilter)))

        
    };
    
    const filterContacts =  getVisibleContact(contacts)
   

        const getGroupContact = (contacts) => {
        if (typeGroupe === 'allContacts') {
            return contacts
        }
        return  contacts.filter(contact=> contact.group === typeGroupe)
    }

    const visibleContacts = getGroupContact(filterContacts)



    return (
   
        <Wrapper>    
           <Label htmlFor='find'>Find contacts by name</Label>
            <Input id="find" type="text"
                onChange={onFilterContacts}
            />
       
            <List>
                {contacts && visibleContacts.map(contact => (<ContactItem key={contact.id} {...contact} isOpen={isOpen} setIdContact={setIdContact} />))}                  
            </List>
        </Wrapper>
)

   
    }

