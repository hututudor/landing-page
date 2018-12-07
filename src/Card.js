import React from 'react';

const Card = (props) => {
    return (
        <div class="card">
            <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">
                        {props.title}
                    </span>
                </h4>
                <div class="card__details">
                    <ul>
                        <li>3 day tour</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                    </ul>
                </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                    <div class="card__price-box">
                        <p class="card__price-only">View on Github</p>
                        <p class="card__price-value"></p>
                    </div>
                    <a href="" class="btn btn--white">Book now</a>
                </div>
            </div>
        </div>
    );
};

export default Card;