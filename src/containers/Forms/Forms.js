import React, { Component } from 'react';

import { inputField as InputField, datePicker as DatePicker, textBox as TextBox } from './../../components/InputForm/InputForm';
import classes from './Forms.module.css';
import { Form, PageHeader, Col, Row, Button } from 'react-bootstrap';
import PayTypeRadio from './../../components/RadioButton/PayTypeRadio';
import TNTRadio from './../../components/RadioButton/TNTRadio';
import MonthYearDropDown from './../../components/DropDown/MonthYearDropDown';
import ClaimTable from '../../components/Table/ClaimTable';
import ClaimRadio from '../../components/RadioButton/ClaimableRadio';
import ClaimTableInput from '../../components/Table/ClaimTableInput/ClaimTableInput';
import IncentiveTable from '../../components/Table/IncentiveTable/IncentiveTable';
import IncentiveInput from '../../components/Table/IncentiveTable/IncentiveTableInput/IncentiveTableInput';
import Modal from '../../components/UI/Modal/Modal';

class Forms extends Component {
    state = {
        confirming: false,
        //----------Implemented
        showroomID: '',
        showroomName: '',
        receiveDate: null,
        saleID: '',
        saleName: '',
        payType: 'cash',
        transferTo: '',
        tax: 'T',
        payFor: '',
        cardOwner: '',
        objective: '',
        claimable: 'No',
        note: '',
        //-----------Not yet
        fromMonth: '',
        toMonth: '',
        year: '2019',
        //-----Claim Table
        tempClaimFrom: '',
        tempAmount: '',
        tempPrice: '',
        claimTable: [],
        //===============
        //-----Incentive Table
        tempCardType: '',
        tempCardAmount: '',
        tempCardPrice: '',
        incentiveTable: []
        //===============

    };
    confirmCancelHandler = () => {
        this.setState({ confirming: false });
    }
    confirmHandler = () => {
        this.setState({ confirming: true });
    }

    getValidationState(value) {
        const length = value.length;
        if (length > 0) return 'success';
        else if (length === 0) return 'error';
        return null;
    }

    getValidationStateNull(value) {
        if (value === null) return 'error';
        else return 'success';
    }

    validateNotNull(value) {
        if (value === null) {
            return false;
        }
        return true;
    }

    handleChange(e, state) {
        const oldState = { ...this.state }
        oldState[state] = e.target.value;
        this.setState(oldState);
    }

    handleClaimInputNumber(e, state) {
        const oldState = { ...this.state }
        if (isNaN(e.target.value)) {
            alert("กรุณาใส่เฉพาะตัวเลข");
            oldState[state] = '';
        } else {
            oldState[state] = e.target.value;
        }
        this.setState(oldState);
    }

    handleClickInClaim(claimFrom, amountVal, priceVal) {
        if (isNaN(amountVal) || isNaN(priceVal) || claimFrom.length === 0) {
            alert("กรุณากรอกเฉพาะตัวเลข และเช็คข้อมูลให้ถูกต้อง")
        } else {
            const oldState = { ...this.state }
            const totalPrice = Number(amountVal) * Number(priceVal);
            oldState['claimTable'].push({ name: claimFrom, amount: amountVal, price: priceVal, total: totalPrice });
            this.setState(oldState);
        }
    }
    handleClickIncentive(cardTypeName, amountVal, priceVal) {
        if (isNaN(amountVal) || isNaN(priceVal) || cardTypeName.length === 0) {
            alert("กรุณากรอกเฉพาะตัวเลข และเช็คข้อมูลให้ถูกต้อง")
        } else {
            const oldState = { ...this.state }
            const totalPrice = Number(amountVal) * Number(priceVal);
            oldState['incentiveTable'].push({ cardType: cardTypeName, amount: amountVal, price: priceVal, total: totalPrice });
            this.setState(oldState);
        }
    }

    deleteIncentiveHandler = {
        onClick: (e, row, rowIndex) => {
            //console.log(row);
            //console.log(`clicked on row with index: ${rowIndex}`);
            const oldState = { ...this.state };
            const newArray = [...this.state.incentiveTable];
            newArray.splice(rowIndex, 1);
            oldState.incentiveTable = newArray;
            this.setState(oldState);
        },
    }

    deleteClaimHandler = {
        onClick: (e, row, rowIndex) => {
            //console.log(row);
            //console.log(`clicked on row with index: ${rowIndex}`);
            const oldState = { ...this.state };
            const newArray = [...this.state.claimTable];
            newArray.splice(rowIndex, 1);
            oldState.claimTable = newArray;
            this.setState(oldState);
        },
    }

    handleDateChange(date, state) {
        const oldState = { ...this.state }
        oldState[state] = date;
        this.setState(oldState);
    }


    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.confirming} modalClosed={this.confirmCancelHandler}>
                    Show
                </Modal>
                <PageHeader className={classes.PageHeaderForm}>Warranty Tracking</PageHeader>
                <div className={classes.Forms}>
                    <Form inline>

                        <InputField
                            controlId="showroomID"
                            validationState={this.getValidationState(this.state.showroomID)}
                            label="รหัสโชว์รูม"
                            value={this.state.showroomID}
                            placeholder="รหัสโชว์รูม"
                            changed={(event) => this.handleChange(event, "showroomID")}
                        />{' '}
                        <InputField
                            controlId="showroomName"
                            label="ชื่อโชว์รูม"
                            validationState={this.getValidationState(this.state.showroomName)}
                            value={this.state.showroomName}
                            placeholder="ชื่อโชว์รูม"
                            changed={(event) => this.handleChange(event, "showroomName")}
                        />{' '}


                    </Form>
                    <Form>
                        <Row>
                            <Col md={4} sm={4}><DatePicker
                                controlId="receiveDate"
                                validateState={this.getValidationStateNull(this.state.receiveDate)}
                                validate={this.validateNotNull(this.state.receiveDate)}
                                label="วันที่รับเอกสารจากโชว์รูม" selected={this.state.receiveDate}
                                changed={(date) => this.handleDateChange(date, 'receiveDate')}
                            /></Col>{' '}
                            <Col md={8} sm={8}><TNTRadio opvalue={this.state.tax} optionChanged={(event) => this.handleChange(event, "tax")} /></Col>
                        </Row>
                    </Form>
                    <div className={classes.Help}>*กรุณากรอกในช่องนี้ให้ครบ</div>
                    <hr />
                    <Form>
                        <Row>
                            <Col md={6} sm={6}>
                                <InputField
                                    controlId="saleID"
                                    validationState={this.getValidationState(this.state.saleID)}
                                    label="Sale ID"
                                    value={this.state.saleID}
                                    placeholder="Sale ID"
                                    changed={(event) => this.handleChange(event, "saleID")}
                                />
                            </Col>
                            <Col md={6} sm={6}>
                                <InputField
                                    controlId="saleName"
                                    validationState={this.getValidationState(this.state.saleName)}
                                    label="ชื่อ Sale"
                                    value={this.state.saleName}
                                    placeholder="Sale Name"
                                    changed={(event) => this.handleChange(event, "saleName")}
                                />
                            </Col>
                        </Row>
                    </Form>
                    <div className={classes.Help}>*กรุณากรอกในช่องนี้ให้ครบ</div>

                    <hr />
                    <Form>
                        <Row>
                            <PayTypeRadio
                                optionChanged={(event) => this.handleChange(event, "payType")}
                                changed={(event) => this.handleChange(event, "transferTo")}
                                disabled={this.state.payType === 'cash'}
                                opvalue={this.state.payType}
                                value={this.state.transferTo}
                            />
                        </Row>
                        <InputField
                            controlId="payFor"
                            label="เพื่อนำไปจ่ายแก่"
                            value={this.state.payFor}
                            placeholder=""
                            changed={(event) => this.handleChange(event, "payFor")}
                        />
                        <InputField
                            controlId="cardOwner"
                            label="เป็นบัตรลงทะเบียนของ"
                            value={this.state.cardOwner}
                            placeholder=""
                            changed={(event) => this.handleChange(event, "cardOwner")}
                        />
                        <InputField
                            controlId="objective"
                            label="วัตถุประสงค์"
                            value={this.state.objective}
                            placeholder=""
                            changed={(event) => this.handleChange(event, "objective")}
                        />
                    </Form>
                    <hr />
                    <Form inline>
                        <MonthYearDropDown
                            fromMonthChanged={(event) => this.handleChange(event, 'fromMonth')}
                            toMonthChanged={(event) => this.handleChange(event, 'toMonth')}
                            yearChanged={(event) => this.handleChange(event, 'year')}
                            fromMonth={this.state.fromMonth}
                            toMonth={this.state.toMonth}
                            year={this.state.year}
                        />
                    </Form>
                    <Row><Col><IncentiveTable rows={this.state.incentiveTable} events={this.deleteIncentiveHandler} /></Col></Row>
                    <IncentiveInput
                        cardType={this.state.tempCardType}
                        claimAmount={this.state.tempCardAmount}
                        claimPrice={this.state.tempCardPrice}
                        changeType={(event) => this.handleChange(event, "tempCardType")}
                        changeAmount={(event) => this.handleChange(event, "tempCardAmount")}
                        changePrice={(event) => this.handleChange(event, "tempCardPrice")}
                        clicked={() => this.handleClickIncentive(this.state.tempCardType, this.state.tempCardAmount, this.state.tempCardPrice)}
                    />
                    <hr />
                    <Row><ClaimRadio value={this.state.claimable} changed={(event) => this.handleChange(event, "claimable")} /></Row>
                    <Row><Col><ClaimTable rows={this.state.claimTable} events={this.deleteClaimHandler} /></Col></Row>
                    <ClaimTableInput
                        claimFrom={this.state.tempClaimFrom}
                        claimAmount={this.state.tempAmout}
                        claimPrice={this.state.tempPrice}
                        changeFrom={(event) => this.handleChange(event, "tempClaimFrom")}
                        changeAmount={(event) => this.handleChange(event, "tempAmount")}
                        changePrice={(event) => this.handleChange(event, "tempPrice")}
                        clicked={() => this.handleClickInClaim(this.state.tempClaimFrom, this.state.tempAmount, this.state.tempPrice)}
                    />
                    <hr />
                    <Form>
                        <TextBox
                            controlId="Note"
                            label="หมายเหตุ"
                            value={this.state.note}
                            placeholder=""
                            changed={(event) => this.handleChange(event, "note")}
                        />
                    </Form>
                    <hr />
                    <div align="right" style={{ padding: '0 5%' }}>
                        <Button onClick={this.confirmHandler}>ส่ง</Button>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default Forms; 