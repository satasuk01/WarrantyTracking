import React from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Radio, Col } from 'react-bootstrap';
import classes from './PayTypeRadio.module.css';

const payTypeRadio = (props) => {
    return (
        <>
            <Col md={5} sm={6} xs={7}><FormGroup>
                <ControlLabel>ประเภทการเบิก: </ControlLabel>
                <Radio name="radioGroup" inline checked={props.opvalue==='cash'} className={classes.Space} value='cash' onChange={props.optionChanged}>
                    เงินสด
                </Radio>{' '}
                <Radio name="radioGroup" inline checked={props.opvalue==='transfer'} value='transfer' onChange={props.optionChanged}>
                    โอนเงินให้แก่
                </Radio>{' '}
                
            </FormGroup></Col>
            <Col md={7} sm={6} xs={5}><FormGroup controlId="PayType">
                <FormControl
                    disabled={props.disabled}
                    type={props.type}
                    value={props.value}
                    placeholder="ชื่อผู้รับโอน"
                    onChange={props.changed}
                />
                <HelpBlock></HelpBlock>
            </FormGroup></Col>
        </>
    );

}

export default payTypeRadio;