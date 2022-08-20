import { Wrapper,Title,Label,Input, } from "./ContactList.styled"
import { ContactItem } from "components/ContactItem/ContactItem";
import { useState } from "react";



export const Contacts = () => {

const [filter, setFilter] = useState('')
    const onFilterContacts = (e) => {

        const name = e.currentTarget.value
        setFilter((name));
        
    }
    console.log(filter);

    const getVisibleContact = (contacts) => {
        const normalizeFilter = filter.toLowerCase().trim();
        return contacts.filter(contact => (contact.name.toLowerCase().includes(normalizeFilter)))
    };





    return (
   
        <Wrapper>
          

            <Title>Contacts</Title>

          
              
           <Label htmlFor='find'>Find contacts by name</Label>
            <Input id="find" type="text"
                onChange={onFilterContacts}
            />
            <ul>

                
                    <ContactItem onFilter={getVisibleContact} ></ContactItem>
                   
       

            </ul>
    </Wrapper>
)

   
    }

