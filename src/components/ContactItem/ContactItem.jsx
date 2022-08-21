import { Text,Button,Item,BtnWrap, Box,SvgWrap} from "./ContactItem.styled"
import { TiUserDelete } from 'react-icons/ti'
import { FaUserEdit } from 'react-icons/fa'
import { useRemoveContactMutation,  } from "redux/ContactsSlice/contactSlice";
import { TailSpin } from 'react-loader-spinner'


export const ContactItem = ({ id,name,number,email,isOpen,setIdContact}) => {



    const [removeContact,{isLoading}] = useRemoveContactMutation();

    const openModalById = (id) => {
        isOpen(isOpen => !isOpen);

        setIdContact(id);
   }




    const deleteContact = (id) => {
        removeContact(id);
        
    }

        
            return (


                <>  <Item key={id }
        >       
                    <Text>Name: {name} </Text>
                    <Text>Number: <a href="tel:{number}">{number}</a> </Text>
                    <Text> Email: <a href="mailto:{ email}">{ email}</a></Text>
                    <BtnWrap>
                        <Button type="button"
                            disabled={isLoading} 
                            onClick={() => deleteContact(id)}>   
                            {isLoading ? <TailSpin                        
                                height="26"                    
                                width="26"  
                                radius="4"
                                color='black'
                            /> :
                                <Box>  <span>Delete</span>                          
                                    <SvgWrap>                                  
                                        <TiUserDelete                         
                                            color="#333d76"
                                            size={16}>                                   
                                        </TiUserDelete>     
                                    </SvgWrap>
                            </Box>
                            }
                            
                        </Button>
                        
                        <Button type="button"
                            onClick={() => openModalById(id) }

                        >
                            <Box>
                                <span>Edit</span>
                                <SvgWrap>
                                    <FaUserEdit                         
                                    color="#333d76"
                                    size={16}>                              
                                    </FaUserEdit>
                                </SvgWrap>
                            </Box>
                            
                        </Button>
                    </BtnWrap>
                       
                    </Item></>
               
           )
    //    })
      
    // )
  
}


