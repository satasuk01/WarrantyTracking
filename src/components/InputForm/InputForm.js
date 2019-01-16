import React from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import classes from './InputForm.module.css';

const inputField = (props) => {
    return (
        <FormGroup
            controlId={props.controlId}
            validationState={props.validationState}
        >
            <ControlLabel className={classes.CLabel}>{props.label}</ControlLabel>
            <FormControl
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changed}
            />
            <FormControl.Feedback />
            <HelpBlock></HelpBlock>
        </FormGroup>
    );
}

const textBox = (props) => {
    return (
        <FormGroup
            controlId={props.controlId}
            validationState={props.validationState}
        >
            <ControlLabel className={classes.CLabel}>{props.label}</ControlLabel>
            <FormControl
                componentClass="textarea"
                value={props.value}
                placeholder={props.placeholder}
                onChange={props.changed}
            />
            <FormControl.Feedback />
            <HelpBlock></HelpBlock>
        </FormGroup>
    );
}

const datePicker = (props) => {
    let dateClass = [classes.DatePicker];
    if (!props.validate) {
        dateClass.push(classes.Red)
    }
    return (
        <FormGroup
            controlId={props.controlId}
            validationState={props.validateState}
        >
            <ControlLabel className={classes.CLabel}>{props.label}</ControlLabel>
            <DatePicker withPortal
                className={dateClass.join(' ')}
                selected={props.selected}
                onChange={props.changed}
                placeholderText="วันที่รับเอกสารจากโชว์รูม"
            />
        </FormGroup>
    );
}



export { inputField, datePicker, textBox };