import React from 'react';
import { FormControl, FormGroup, ControlLabel, Row, Col } from 'react-bootstrap';

import classes from './DropDown.module.css';

const monthYearDropDown = (props) => {

    return (
        <>
            <Row>
                <Col md={12}><ControlLabel>รายละเอียดการเบิกค่าบัตรลงทะเบียนในครั้งนี้</ControlLabel></Col>
            </Row>
            <Row>
                <Col md={1} xs={3}>
                    <FormGroup controlId="formControlsSelect">

                        <FormControl componentClass="select" placeholder="Month" onChange={props.fromMonthChanged} value={props.fromMonth}>
                            <option value=""> </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </FormControl>

                    </FormGroup>
                </Col>
                <Col md={1} xs={1} className={classes.Center}><ControlLabel className={classes.SeparateMonth}>ถึง</ControlLabel></Col>
                <Col md={1} xs={3}>
                    <FormGroup controlId="formControlsSelect">
                        <FormControl componentClass="select" placeholder="Month" onChange={props.toMonthChanged} value={props.toMonth}>
                            <option value=""> </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </FormControl>
                    </FormGroup>
                </Col>
                <Col md={1} xs={5}>
                    <FormGroup controlId="formControlsSelect">
                        <FormControl componentClass="select" placeholder="Year" onChange={props.yearChanged} value={props.year}>
                            <option value=""> </option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </FormControl>
                    </FormGroup>
                </Col>
            </Row>
        </>
    );
}

export default monthYearDropDown;