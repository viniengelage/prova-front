import React, {useEffect, useState} from 'react';
import { auth } from '../../services/api';

// import { Container } from './styles';

function IndexContacts() {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        async function getItems(){
            const response = await auth.get('/contacts')

            setContacts(response.data)
        }
        getItems();
    }, [])
    return (
        <>
            {contacts && (
                <>
                    {contacts.map(contact => (
                        <>
                            <strong>{contact.name}</strong>
                            {contact.emails.map(email => (
                                <p>{email.email}</p>
                            ))}
                            {contact.telephones.map(telephone => (
                                <p>{telephone.telephone}</p>
                            ))}
                        </>
                    ))}
                </>
            )}
        </>
    )
}

export default IndexContacts;