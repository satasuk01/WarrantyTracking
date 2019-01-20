import React, { Component } from 'react';

import { Col, Row, Button } from 'react-bootstrap';
import IncentiveTable from '../../components/Table/IncentiveTable/IncentiveTable';
import ClaimTable from '../../components/Table/ClaimTable';
import classes from './CardApproval.module.css';
import Modal from '../../components/UI/Modal/Modal';

class CardApproval extends Component {
    state = {
        approving: false,
        rejecting: false,
        rejectReason: '',
        //========================
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
        fromMonth: '',
        toMonth: '',
        year: '2019',
        claimTable: [],
        incentiveTable: [],
        //=========================
        ownerID: '',
        status: '',
        version: '',
        saleSubmitDateTime: null,
        adminID: '',
        adminSubmitDateTime: null,
        accID: '',
        accRecDateTime: null,
        accSubmitDateTime: null,
        adminC_ID: '',
        adminC_RecDateTime: null,
        adminC_SubmitDateTime: null,
        taxAccID: '',
        taxAccRecDateTime: null,
        taxAccSubmitDateTime: null,
        financeID: '',
        financeRecDateTime: null,
        financeSubmitDateTime: null


    }
    approveCancelHandler = () => {
        this.setState({ approving: false });
    }
    approveHandler = () => {
        this.setState({ approving: true });
    }
    rejectCancelHandler = () => {
        this.setState({ rejecting: false });
    }
    rejectHandler = () => {
        this.setState({ rejecting: true });
    }
    componentDidMount() {
        //Get data from server
    }
    render() {
        const space = <span className={classes.Space} />;
        let claimTable = <p />
        if (this.state.claimable === 'Yes') {
            claimTable = <Row><Col><ClaimTable rows={this.state.claimTable} /></Col></Row>;
        }
        return (
            <>
                <Modal show={this.state.approving} modalClosed={this.approveCancelHandler}>
                    <div>กรุณาเช็คข้อมูลให้เรียบร้อย ก่อนทำการยืนยัน</div>
                    <div style={{ color: 'red', marginTop: '20px', textAlign: 'right' }}>*หลังจากยืนยันไปแล้วจะไม่สามารถแก้ไขได้อีก</div>
                    <Button style={{ marginRight: '10px' }} bsStyle="success">ยืนยัน</Button>
                    <Button onClick={this.approveCancelHandler}>กลับไปแก้ไข</Button>
                </Modal>
                <Modal show={this.state.rejecting} modalClosed={this.rejectCancelHandler}>
                    <div>กรุณาเช็คข้อมูลให้เรียบร้อย ก่อนทำการยืนยัน</div>
                    <div style={{ color: 'red', marginTop: '20px', textAlign: 'right' }}>*หลังจากยืนยันไปแล้วจะไม่สามารถแก้ไขได้อีก</div>
                    <Button style={{ marginRight: '10px' }} bsStyle="danger">ปฏิเสธเอกสาร</Button>
                    <Button onClick={this.rejectCancelHandler}>กลับไปแก้ไข</Button>
                </Modal>
                <div className={classes.CardApproval}>
                    <h3 style={{ textAlign: 'center' }}>รายละเอียด</h3>
                </div>
                <div className={classes.CardApproval}>
                    <p style={{ textAlign: 'right' }}><strong>ID</strong>: {this.props.match.params.id}</p>
                    <p><strong>รหัสโชว์รูม</strong>: {this.state.showroomID} {space}<strong>ชื่อโชว์รูม</strong>: {this.state.showroomName}</p>
                    <p><strong>วันที่รับเอกสารจากโชว์รูม</strong>: {this.state.receiveDate} {space}<strong>ประเภทการเบิก</strong>: {this.state.tax}</p>
                    <hr />
                    <p><strong>ชื่อ Sale</strong>: {this.state.saleName} {space}<strong>Sale ID</strong>: {this.state.saleID}</p>
                    <hr />
                    <p><strong>ประเภทการเบิก</strong>: {this.state.payType === 'cash' ? <span>เงินสด</span> : <span>โอนเงินให้แก่ </span>} {this.state.transferTo}</p>
                    <p><strong>เพื่อนำไปจ่ายแก่</strong>: {this.state.payFor}</p>
                    <p><strong>เป็นบัตรลงทะเบียนของ</strong>: {this.state.cardOwner}</p>
                    <p><strong>วัตถุประสงค์</strong>: {this.state.objective}</p>
                    <hr />
                    <p><strong>รายละเอียดการเบิกค่าบัตรลงทะเบียนในครั้งนี้</strong></p>
                    <p>ตั้งแต่เดือน {this.state.fromMonth} ถึง {this.state.toMonth} ปี {this.state.year}</p>
                    <Row><Col><IncentiveTable rows={this.state.incentiveTable} /></Col></Row>
                    <hr />
                    <p><strong>การเรียกคืนค่าใช้จ่ายในครั้งนี้</strong>: {this.state.claimable === 'No' ? <span>ไม่ได้</span> : <span>ได้</span>}</p>
                    {claimTable}
                    <hr />
                    <p><strong>หมายเหตุ</strong>: {this.state.note}</p>
                    <div align="right" style={{ padding: '0 5%' }}>
                        <Button onClick={this.approveHandler} bsStyle='success' style={{ margin: '0 5%' }}>ยืนยัน</Button>
                        <Button onClick={this.rejectHandler} bsStyle='danger'>ปฏิเสธ</Button>
                    </div>
                </div>

            </>
        );

    }
}

export default CardApproval;