import React from 'react';

const Card = (props) => {
    const { Icon, disc, title } = props;
    return (
        <div className="bg-[#000] p-4 w-[250px] h-[230px] flex flex-col items-center rounded-[10px] shadow-2xl">
            <span className="text-4xl mb-3">{Icon}</span>
            <h1 className="text-xl bg-gradient-to-r from-yellow-600 to-slate-200 bg-clip-text text-transparent text-center mb-4">
                {title}
            </h1>
            <p className="text-sm text-white text-center">{disc}</p>
        </div>
    );
}

export default Card;