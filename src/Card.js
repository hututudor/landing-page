import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title + " project image"} className="card__image" />
            <div className="card__container">
                <p className="card__description">
                    {props.description}
                </p>
                {
                    props.links.map((link, index) => (
                        <a href={link.link} className={{'btn': true, 'btn--purple': true, 'btn--double': (props.links.length > 2 ? true : false)}} key={index}>View on {link.name}</a>
                    ))
                }
            </div>
        </div>
    );
};

export default Card;