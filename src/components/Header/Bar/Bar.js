import React, { Component } from 'react';
// import "./Profile.css";
import { Button, Col, Row } from 'react-bootstrap';

function Bar (props) {
    return (
        <div className="verify-post" style={{margin:60}}>

            <div className="d-flex justify-content-between">
                <p>{props.name}</p>
                <p>{props.date}</p>
                <div style={{margin:20}}>
                <Button className="btn-success">Verify</Button>                
                <Button className="btn-danger" >Deny</Button>
                </div>
            </div>

        </div>
    );
}
export default Bar; // Don’t forget to use export default!