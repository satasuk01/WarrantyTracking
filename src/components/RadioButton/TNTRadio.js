import React from 'react';
import { FormGroup, ControlLabel, Radio } from 'react-bootstrap';
import classes from './PayTypeRadio.module.css';

const payTypeRadio = (props) => {
    return (
        <FormGroup>
            <ControlLabel>ประเภทการเบิก: </ControlLabel>
            <Radio name="radioGroup" inline checked={props.opvalue === 'T'} className={classes.Space} value='T' onChange={props.optionChanged}>
                T
                </Radio>{' '}
            <Radio name="radioGroup" inline checked={props.opvalue === 'NT'} value='NT' onChange={props.optionChanged}>
                NT
                </Radio>{' '}

        </FormGroup>
    );
}

export default payTypeRadio;