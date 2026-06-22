import React, { useState } from 'react'
import "./PreviousTicketsModal.css"
import "../../pages/SupportPage/SupportPage.css"
import FAQSearch from '../FAQSearch/FAQSearch';
import {levenshtein, tokenize} from "../FAQSearch/searchUtils"

const tickets = [
  // { id: 1, title: "Display not working" },
  // { id: 2, title: "Touch issue" },
  // { id: 3, title: "OPS connection problem" },
];

const PreviousTicketsModal = ({onClose}) => {
  const [searchTerm, setSearchTerm] = useState("");
  
const filteredTickets = tickets.filter((ticket) => {
  const searchTokens = tokenize(searchTerm);

  if (!searchTokens.length) return true;

  const titleWords = tokenize(ticket.title);

  return searchTokens.some((searchWord) =>
    titleWords.some(
      (titleWord) =>
        titleWord.includes(searchWord) ||
        levenshtein(searchWord, titleWord) <= 1
    )
  );
});
  return (
    <div>
      <div
    className="sp-modal-overlay"
    onClick={onClose}
  >
    <div
      className="sp-ticket-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sp-modal-header">
        <h2>Previous Cases</h2>
        <button
          className="sp-close-btn"
          onClick={onClose}
        >
          ×
        </button>
      </div>
      <div>
        <FAQSearch
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
       
            {/* <div className="search-bar">
          <input type="text" placeholder="Type here" className="search-input" />
          <button className="search-btn">
            <img src={searchIcon} alt="search" />
          </button>
        </div> */}
        

        
      </div>
{/* <p>Your previously raised support tickets will appear here.</p> */}
      <div className="sp-modal-body">
<div className="sp-model-items">
            
<div className="sp-modal-body">
 {filteredTickets.length > 0 ? (
  filteredTickets.map((ticket) => (
    <div key={ticket.id} className="sp-model-items">
      <p>{ticket.title}</p>
    </div>
  ))
) : searchTerm.trim() ? (
  <p>No data found</p>
) : null}
</div>
</div>
     

      </div>
    </div>
  </div>
    </div>
  )
}

export default PreviousTicketsModal
