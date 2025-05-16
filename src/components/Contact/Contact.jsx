import React from 'react'
import css from './Contact.module.css'
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({name, phone, id}) => {
  const dispatch = useDispatch();

  const contactRemove = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.box}>
        <ul className={css.list}>
            <li className={css.item}><FaUser /> {name}</li>
            <li className={css.item}><FaPhone /> {phone}</li>
            
        </ul>
        <button className={css.button} onClick={() => contactRemove(id)}>Delete</button>
    </div>
  )
}

export default Contact