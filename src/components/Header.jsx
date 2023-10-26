import React from 'react';

const Header = (props) => {
    const {count,setCount} = props;
    return (
        <>
            <h1 className='text-[25px]'>Count : {count}</h1>
            <button className='border-2 bg-amber-300 px-2' onClick={() => setCount(count + 1)}>increment</button>
        </>
    );
};

export default Header;