import { React } from "react";

 import { Formik,  Form,  } from 'formik';
import { Wrapper,Btn,Label,Input,Text, Message } from "./Form.styled";
import * as yup from 'yup';
import { AiOutlineUserAdd } from 'react-icons/ai'
import { useAddContactMutation,useGetContactsQuery } from "redux/ContactsSlice/contactSlice";
// import { addContact } from "redux/ContactsSlice/contactSlice";
// import { useSelector } from "react-redux";
// import { nanoid } from 'nanoid'



let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})
export const AddContactForm = () => {
    const [ addContact ] = useAddContactMutation();
    const { data: contacts } = useGetContactsQuery();

    const getInfoContact = ({name,number}, action) => {
        addContact({name,number});
        const checkOnIncludes = contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase());
        
        if (checkOnIncludes) {
      return alert(`${name} is already in contacts`)
        };

         action.resetForm();
    }

    return (
        <Wrapper>
            <Text>Phonebook</Text>
                <Formik initialValues={{ name: '', number: '' }}
                    validationSchema={schema}
                onSubmit={getInfoContact}
            >
                <Form>
                    <Label  htmlFor="name">Enter the name</Label>
                    <Input id="name" name="name" type="text"></Input>
                    <Message component='div' name="name"></Message>
                       <Label  htmlFor="number">Enter the number</Label>
                    <Input id="number" name="number" type="tel"></Input>
                     <Message component='div' name="number"></Message>
                            <Btn type='submit'>   <AiOutlineUserAdd size={24}  color='#4b894b'></AiOutlineUserAdd></Btn>
                </Form>
                </Formik>
                </Wrapper>

        )
    }


