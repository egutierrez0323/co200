/* eslint-disable no-lone-blocks */
import React from 'react'
import {Form} from 'react-bootstrap'

const Inputform = ({text, type,onChange}) => {
    if(type === 1){{/*PARA TEXTO PLANO INGRESE EL 1*/}
        return ( 
            <Form.Group className="mb-3" controlId={text}>
                <Form.Label>{text}</Form.Label>
                <Form.Control type="text" placeholder={`INGRESE ${text}`} onChange={onChange}/>
            </Form.Group>
        )
    }else if(type === 2 ){ {/*PARA CONTRASEÑA INGRESE EL 2*/}
        return (
            <Form.Group className="mb-3" controlId={text}>
                    <Form.Label>{text}</Form.Label>
                    <Form.Control type="password" placeholder={`INGRESE ${text}`} onChange={onChange}/>
            </Form.Group>
        )
    }else if(type === 3) { {/*PARA EMAIL INGRESE EL 2*/}
        return (
            <Form.Group className="mb-3" controlId={text}>
                    <Form.Label>{text}</Form.Label>
                    <Form.Control type="password" placeholder={`INGRESE ${text}`} onChange={onChange}/>
            </Form.Group>
        )
    }else {
        return (
        <h1>NOT TYPE FOUND</h1>
        )
    }
}

export default Inputform
