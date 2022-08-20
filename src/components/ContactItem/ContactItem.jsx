import { Text,Button,Item } from "./ContactItem.styled"
import { TiUserDelete } from 'react-icons/ti'
// import PropTypes from 'prop-types'; 
import { useGetContactsQuery,useRemoveContactMutation } from "redux/ContactsSlice/contactSlice";

export const ContactItem = ({onFilter}) => {
    const { data: contacts } = useGetContactsQuery();
    const [removeContact] = useRemoveContactMutation();

    const visibleContacts = contacts && onFilter(contacts);
    
    return (
        
        visibleContacts &&  visibleContacts.map(({id,name,number}) => {
            return (
                 <Item key={id }
        >
                        <Text>{name}: {number}</Text>
                        <Button type="button"
                            onClick={() => removeContact(id)}
                        ><TiUserDelete
                            color="#763f33"
                            size={22}>
                            </TiUserDelete>
                        </Button>
                    </Item>
           )
       })
      
    )
}


// Contacts.prototype = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
        
//         id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number:PropTypes.string.isRequired
//     })),

    
  
// }