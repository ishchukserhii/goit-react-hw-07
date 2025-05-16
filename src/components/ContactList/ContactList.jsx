import { useSelector } from 'react-redux';
import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useMemo } from 'react';


const ContactList = () => {
  const itemsList = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = useMemo(() => {
    return itemsList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [itemsList, filter]);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact  id={contact.id} name={contact.name} phone={contact.number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
