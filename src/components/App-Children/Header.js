import React from "react";
import ticketsImage from "../../img/cat.jpg";

function Header(){
  return (
    <>
    <h1>Help Queue</h1>
    <img src={ticketsImage} alt="Photograph of a cat screaming at a phone" width="626" height="626" />
    </>
  );
}

export default Header;