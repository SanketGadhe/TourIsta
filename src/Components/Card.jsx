import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card rounded-lg shadow-md bg-white px-6 py-4 m-4">
            <div className="img flex justify-center">
                <img src="/src/Static/1.jpg" className="w-48" alt="" />
            </div>
            <div className="head font-bold text-xl mt-4">{props.heading}</div>
            <div className="about text-gray-600 text-sm mt-2">{props.about}</div>
            <div className="servbutton flex justify-center items-center mt-4">
               <NavLink to={props.url}> <button className="bg-[#008b96] text-white font-bold py-2 px-6 rounded hover:opacity-70 transition-colors">
                    {props.name}
                </button></NavLink>
            </div>
        </div>
    );
};
export default Card;
