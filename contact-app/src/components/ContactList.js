import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="main">
      <h3>
        Contatos cadastrados
        <Link to="/add">
          <button className="tiny ui button violet right floated">
            Adicionar contato
          </button>
        </Link>
      </h3>
      <div className="ui search">
        <div className="ui icon input">
            <input 
              ref={inputEl}
              type="text" 
              placeholder="Procurar contato" 
              className="prompt" 
              value={ props.term } 
              onChange= { getSearchTerm } 
            />
            <i className="search icon"></i>
        </div>

      </div>
      <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "Sem contatos disponiveis"}</div>
    </div>
  );
};
export default ContactList;