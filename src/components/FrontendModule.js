import React from "react";

export default function FrontendModule(props) {
  const modules = props.data.map((item) => {
    return (
      <div className="frontend-module">
        <h3>{item.name}</h3>
        <img src={item.imgURL} alt="" />
        <p>{item.desc}</p>
        <div className="frontend-links">
          <a href={item.liveURL} target="_blank" rel="noreferrer"><img className="github-logo" src="/assets/img/frontend/GitHub_Logo.png" alt="GitHub"/></a>
        </div>
      </div>
    );
  });

  return <>{modules}</>;
}
