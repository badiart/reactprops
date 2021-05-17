import PropTypes  from "prop-types";
import React from 'react';
import {defaultProps}  from 'default-props'

const Component = ({fullname,age,profession,alertMe}) => {
    console.log(fullname)
    return (
        <div> 

<h1>my name is {fullname},i am {age}years old and i am an {profession} </h1>
{alert()}
        </div>
    )
}
Component.propTypes={
    fullname:PropTypes.string,
    age:PropTypes.number,

    profession:PropTypes.string,
}
Component.defaultProps={
    fullname:"aaa",
    age:11111,
    profession:"jobseeker",
}
export default Component
