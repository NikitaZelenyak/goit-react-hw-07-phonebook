
import { AddContactForm } from "../pages/AddContactForm/AddContactForm";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import { Header,Container,Link,Nav,Text } from "./App.styled";
import { ContactsBar } from "./ContactsBar/ContactsBar";
import { ContactsList } from "../pages/ContactList/ContactList";
import { RiContactsBook2Fill } from 'react-icons/ri'
import { IoIosPersonAdd } from 'react-icons/io'
import { Modal } from "./Modal/Modal";




export const App = () => {
 
   const [isOpen, seIisOpen] = useState(false);
   const [idContact, setIdContact] = useState(" ");
   
   return (

      <Container >
         <Header>
           <i><Text>
              ContactsBook
            </Text></i> 
            <Nav>
              
               <Link to='/'><RiContactsBook2Fill size={24} /></Link>
               <Link to='/create'><IoIosPersonAdd size={24}/></Link>

            </Nav>
         </Header>
 
         {isOpen && <Modal idContact={idContact} onClose={seIisOpen}></Modal>}
            <Routes>
            <Route path="/" element={<ContactsBar  />}>
               <Route path='/allContacts/' element={<ContactsList isOpen={seIisOpen} setIdContact={setIdContact } />}>
               </Route>
               <Route path='/favorites' element={<ContactsList isOpen={seIisOpen} setIdContact={setIdContact }></ContactsList>}></Route>
               <Route path='/work' element={<ContactsList   isOpen={seIisOpen} setIdContact={setIdContact } ></ContactsList>}></Route>
               <Route path='/friends' element={<ContactsList   isOpen={seIisOpen} setIdContact={setIdContact } ></ContactsList>}></Route>
               <Route path='/family' element={<ContactsList isOpen={seIisOpen} setIdContact={setIdContact }></ContactsList>}></Route>
               
            </Route>
            <Route path='/create' element={<AddContactForm />}></Route>
            </Routes>
           

     
           
            
      </Container>
    )
}



