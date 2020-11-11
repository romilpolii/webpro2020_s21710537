import React from "react"

const Card =({name, institution, addres, phoneNumber}) => {
    return (
        <div className="Card_countainer">
            <p>{name}</p>
            <p>{institution}</p>
            <p>{addres}</p>
            <p>{phoneNumber}</p>
        </div>
    );
}
export default Card;