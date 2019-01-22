import React from 'react';

import { Row, Col, Form, Button ,FormGroup, FormControl,ControlLabel} from 'react-bootstrap';
import { inputField as InputField } from '../../InputForm/InputForm';
import classes from './ClaimTable.module.css';
import '../Table.css';

const claimTableInput = (props) => {
    //TODO Convert string to int in the input field
    return (
        <>
            <Form>
                <Row>
                    <Col xs={2} sm={3}>
                        <InputField
                            controlId="from"
                            label="เรียกคืนจาก"
                            placeholder=""
                            value={props.claimFrom}
                            changed={props.changeFrom}
                        />
                    </Col>
                    <Col xs={2} sm={3}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>บัตรลงทะเบียน</ControlLabel>
                            <FormControl componentClass="select" onChange={props.changeType} value={props.cardType}>
                                <option value=""></option>
                                <option value="XtraCole 7 รุ่น">XtraCole 7 รุ่น</option>
                                <option value="XtraCole ธรรมดา">XtraCole ธรรมดา</option>
                                <option value="Ceramic X">Ceramic X</option>
                                <option value="Lamina">Lamina</option>
                                <option value="Lamina Pop">Lamina Pop</option>
                                <option value="Lamina Cerematrix">Lamina Cerematrix</option>
                                <option value="Glacia">Glacia</option>
                                <option value="Johnson">Johnson</option>
                            </FormControl>
                        </FormGroup>
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