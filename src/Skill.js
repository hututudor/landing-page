import React from 'react';

const Skill = (props) => {
    return (
        <div className="skill">
            <h1 className="skill__icon"><i className={props.icon}></i></h1>
            <h3 className="skill__title">{props.title}</h3>
        </div>
    );
};

export default Skill;