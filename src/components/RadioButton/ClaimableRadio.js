import React from 'react';
import { FormGroup, ControlLabel, Radio, Col } from 'react-bootstrap';
import classes from './PayTypeRadio.module.css';

const claimableRadio = (props) => {
    return (
        <>
            <Col md={5} sm={6} xs={7}><FormGroup>
                <ControlLabel>การเรียกคืนค่าใช้จ่ายในครั้งนี้: </ControlLabel>
                <Radio name="radioGroup" inline checked={props.value==='Yes'} className={classes.Space} value='Yes' onChange={props.changed}>
                    ได้
                </Radio>{' '}
                <Radio name="radioGroup" inline checked={props.value==='No'} value='No' onChange={props.changed}>
                    ไม่ได้
                </Radio>{' '}
                
            </FormGroup></Col>
        </>
    );

}

export default claimableRadio;