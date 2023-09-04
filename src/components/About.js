import React from "react";
import Links from "./Links"

function About(props) {
  // console.log(props.links.github)
  const hasBio = true
  return (
    <div id="about">
      <h2>About Me</h2>
      {hasBio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.links}/>
    </div>
  );
}

export default About;
