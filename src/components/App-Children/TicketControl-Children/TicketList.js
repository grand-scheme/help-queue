import React from "react";
import Ticket from "./TicketList-Children/Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  return (
    <>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket names = {ticket.names}
          location = {ticket.location}
          issue = {ticket.issue}
          key = {index}/>
      )}
    </>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;