import React from 'react';
import {Button} from 'react-bootstrap'

const DefaultButtom = ({typebuttom,text,onClick}) => {
    
    if(typebuttom === 1){
        return (
            <Button variant="primary" onClick={onClick} >{text}</Button>
        )
    }else if (typebuttom === 2){
        return(
            <Button variant="danger" onClick={onClick} >{text}</Button>
        )
    }else{
        return(
        <h1> TYPEBUTTOM NOT FOUND </h1>
        )
    }
}

export default DefaultButtom;
