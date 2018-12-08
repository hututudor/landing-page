import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title + " project image"} className="card__image" />
            <div className="card__container">
                <h1 className="card__title">{props.title}</h1>
                <p className="card__description">
                    {props.description}
                </p>
                {
                    props.links.map((link, index) => (
                        <a href={link.link} className={'btn btn--purple ' + (props.links.length > 1 ? 'btn--double' : '') } key={index}>View on {link.name}</a>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;