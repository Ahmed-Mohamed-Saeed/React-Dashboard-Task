import React, { useState } from 'react';

const Card = ({car}) => {
    const [fav, setFav] = useState(false)
    const toggleFavorites = () => {
        setFav(!fav);
    };
  return (
    <div className="card">
        <div className="card-header flex">
            <p>{car.name}</p>
            <img src={fav === true ? "./assets/images/red-heart.png" : "./assets/images/heart.png"} alt="heart" onClick={toggleFavorites}
            />
        </div>
        <p className="model">{car.model}</p>
        <div className="card-img">
            <img src={car.image} alt={car.name} />
        </div>
        <div className="card-footer flex">
            <div className="user flex">
                <img src="./assets/images/user.png" alt="user"/>
                <p>{car.number}</p>
            </div>
            <div className="type flex">
                <img src="./assets/images/type.png" alt="type"/>
                <p>{car.type}</p>
            </div>
            <div className="price">
                <p>
                    ${car.price}<span>/d</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card;