import React from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';
import { inputField as InputField } from '../../InputForm/InputForm';
import classes from './ClaimTable.module.css';

const claimTableInput = (props) => {
    //TODO Convert string to int in the input field
    return (
        <>
            <Form>
                <Row>
                    <Col xs={4} sm={6}>
                        <InputField
                            controlId="from"
                            label="เรียกคืนจาก"
                            placeholder=""
                            value={props.claimFrom}
                            changed={props.changeFrom}
                        />
                    </Col>
                    <Col xs={4} sm={3}>
                        <InputField
                            controlId="amount"
                            label="จำนวนใบ"
                            placeholder=""
                            value={props.claimAmount}
                            changed={props.changeAmount}
                        />
                    </Col>
                    <Col xs={4} sm={3}>
                        <InputField
                            controlId="price"
                            label="ราคาใบละ"
                            placeholder=""
                            value={props.claimPrice}
                            changed={props.changePrice}
                        />
                    </Col>
                </Row>

            </Form>
            <Row><Col><div align="right" className={classes.Div}>
                <Button onClick={props.clicked}>เพิ่ม</Button>
            </div></Col></Row>
        </>
    );
}

export default claimTableInput;