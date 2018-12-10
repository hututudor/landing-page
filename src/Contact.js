import React from 'react';

const Contact = (props) => {
    return (
        <div className="contact">
            <h1 className="contact__icon"><i className={props.icon}></i></h1>
            <h3 className="contact__title">{props.title}</h3>
            <h3 className="contact__content">{props.content}</h3>
        </div>
    );
};

export default Contact;