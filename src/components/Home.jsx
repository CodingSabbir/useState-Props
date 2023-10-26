import React from 'react';
import Catagory from './Catagory';

const Home = (props) => {
    const {count}=props
    return (
        <>
            <h1>Count value : {count}</h1>
            <Catagory count={count}/>
        </>
    );
};

export default Home;