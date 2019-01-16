import React from 'react';
import { FormControl, FormGroup, ControlLabel, Row, Col } from 'react-bootstrap';


import classes from './DropDown.module.css';

const statusDropDown = (props) => {

    return (
        <>
            <Row>
                <Col md={12} style={{margin:'0px 10px'}}><ControlLabel>สถานะ</ControlLabel></Col>
                <Col md={12}>
                    <FormGroup controlId="formControlsSelect">

                        <FormControl componentClass="select" onChange={props.changed} value={props.status}>
                            <option value="0">All</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </FormControl>

                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}

export default statusDropDown;