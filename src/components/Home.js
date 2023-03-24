import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactList from './ContactList';
import Chat from './Chat';
import { setSelectedContact } from '../store';
import SqlGenerator from './SqlGenerator';
import mermaid from 'mermaid';

const Home = () => {
	const dispatch = useDispatch();
	const [selectedContact, setSelectedContact] = useState(null);
	const contacts = useSelector((state) => state.contacts);

	const handleContactSelect = (contact) => {
		// dispatch(setSelectedContact(contact));
		setSelectedContact(contact);
	};

	mermaid.initialize({
		startOnLoad: true,
	});

	return (
		<div className='flex-row home'>
			<ContactList contacts={contacts} onContactSelect={handleContactSelect} />
			{selectedContact ? (
				selectedContact.id != 4 ? (
					<Chat selectedContact={selectedContact} />
				) : (
					<SqlGenerator selectedContact={selectedContact} />
				)
			) : (
				<>
					<div className='d-flex flex-row chatbot align-items-center justify-content-center'>
						<span>Select an AI tool to begin the chat</span>
					</div>
					{/* <div className='d-flex flex-row chatbot align-items-center justify-content-center mermaid'>
						{`graph LR;
A-->B;
B-->C;
B-->D[plop lanflz eknlzeknfz];

      `}
					</div> */}
				</>
			)}
		</div>
	);
};

export default Home;
