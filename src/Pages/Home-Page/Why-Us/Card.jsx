import React from 'react';

const Card = (props) => {
    const { Icon, disc, title } = props;
    return (
        <div className="bg-gray-100 p-4 w-[250px] h-[230px] flex flex-col items-center rounded-[10px] shadow-2xl">
            <span className="text-4xl mb-3">{Icon}</span>
            <h1 className="text-xl font-[500] bg-gradient-to-r from-orange-400 to-slate-600 bg-clip-text text-transparent text-center mb-3">
                {title}
            </h1>
            <p className="text-sm text-slate-700 text-center flex font-light tracking-normal">{disc}</p>
        </div>
    );
}

export default Card;