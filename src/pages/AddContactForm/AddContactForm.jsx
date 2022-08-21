import { React } from "react";
import toast, { Toaster } from 'react-hot-toast';
 import { Formik,  Form,  } from 'formik';
import { Wrapper,Btn,Label,Input, Message, } from "./AddContactForm.styled";
import * as yup from 'yup';
import { AiOutlineUserAdd } from 'react-icons/ai'
import { useAddContactMutation,useGetContactsQuery } from "redux/ContactsSlice/contactSlice";
import { TailSpin } from  'react-loader-spinner'



let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})
export const AddContactForm = () => {
    const [ addContact ] = useAddContactMutation();
    const { data: contacts,isFetching, } = useGetContactsQuery();

    const getInfoContact = async ({ name, number, email, group }, action,) => {
        try {
            await addContact({ name, number, email, group });
              
            const checkOnIncludes = contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase());     
      
            if (checkOnIncludes) {
            return toast.error(`This name: "${name}" already have in list`)
            };
               toast.success(`Contact added`)
             
        } catch (error) {
            
            toast.error(`${error}`)
        }

      
        action.resetForm();
          
     
    }


    return (
      
        <Wrapper>
  
            <div ><Toaster  position="top-right"     /></div>
            <Formik
                initialValues={
                {
                    name: '',
                    number: '',
                    email: '',
                    group: "Other",
                }}                   
                validationSchema={schema}
                onSubmit={getInfoContact}
            >
                <Form>                   
                    <Label htmlFor="name">Enter the name</Label>                   
                    <Input id="name" name="name" type="text"></Input>
                    <Message component='div' name="name"></Message>                   
                    <Label htmlFor="number">Enter the number</Label>
                    <Input id="number" name="number" type="tel"></Input>
                    <Message component='div' name="number"></Message>                   
                    <Label htmlFor="email">Enter the email</Label>
                    <Input id="email" name="email" type="email"></Input>                
                    <Label htmlFor="group">Select group</Label>
                    <Input as="select" id="group" name="group">                       
                        <option value="favorites">Other</option>                             
                        <option value="favorites">Favorites</option>   
                        <option value="family">Family</option>          
                        <option value="work">Work</option>
                        <option value="friends">Friends</option>                      
                    </Input>
                         
                    <Btn type='submit'  >
                        {isFetching ?
                            <TailSpin
                        height="26"  
                        width="26"  
                        radius="4"
                        color='black' />
                            :
                            <AiOutlineUserAdd
                                size={24}
                                color='#000000'/>}
                    </Btn>              
                </Form>              
            </Formik>
                </Wrapper>

        )
    }


