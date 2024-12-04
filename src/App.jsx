import React from "react";
import { useState } from "react";
import "./index.css";

function App() {
    return (
        <div className="container">
            <ImageHolder Imgsrc="./img.jpg" />
            <div className="inner-container">
                <DevName name="Astro Vector"/>
                <DevBio
                    descr="Fullstack web developer, Data scientist. I like to
            play board games , listen to music , cook(and eat). Send gigs ❤️ "
                />
                <div className="skills">
                    <AstroSkills />
                </div>
            </div>
	        </div>
    );
}

const ImageHolder = props => {
    return (
        <div>
            <img src={props.Imgsrc} alt="avatar" />
        </div>
    );
};

const DevName = props => {
    return <h1>{props.name}</h1>;
};

const DevBio = props => {
    return <p>{props.descr}</p>;
};

const AstroSkills = () => {
    const skills = [
        ["HTML+CSS💪", "#309ee6"],
        ["Javascript 💪", "#eaea81ab"],
        ["Web design 🚀", "#eb5733"],
        ["Git and Github🏅", "#3ee4a2be"],
        ["React 🤲", "#27a5cdc4"],
        ["Python 👑", "#da89da"]
    ];
    return (
        <>
            {skills.map((skill,index)=> (
                <div className="skill" style={{ backgroundColor: skill[1] }}
                key={index}>
                    {skill[0]}
                </div>
            ))}
        </>
    );
};
export default App;
