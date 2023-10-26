import React from 'react';
import SubCatagory from './SubCatagory';

const Catagory = (props) => {
    return (
        <>
            <SubCatagory count={props.count}/>
        </>
    );
};

export default Catagory;