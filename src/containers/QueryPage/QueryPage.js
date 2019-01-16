import React, { Component } from 'react';

import { Form, PageHeader, Col, Row, ControlLabel, Button } from 'react-bootstrap';
import { inputField as InputField } from '../../components/InputForm/InputForm';
import StatusDropDown from '../../components/DropDown/StatusDropDown';
import DatePicker from 'react-datepicker';
import QueryTable from '../../components/Table/QueryTabel/QueryTable';
import classes from './QueryPage.module.css';

class QueryPage extends Component {
    state = {
        isLoading: false, //implement modal
        showroomID: '',
        showroomName: '',
        receiveDateFrom: null, //ถ้าวันเป็น null ให้เป็น วันแรกของ 2561
        receiveDateTo: null, //ถ้าวันเป็น null ให้เป็น ปัจจุบัน
        status: '0',
        saleID: '',
        saleName: '',
        queryResult: []
    }

    handleChange(e, state) {
        const oldState = { ...this.state }
        oldState[state] = e.target.value;
        this.setState(oldState);
    }

    handleDateChange(date, state) {
        const oldState = { ...this.state }
        oldState[state] = date;
        this.setState(oldState);
        console.log(date);
    }
    handleQuery(){

    }

    render() {
        return (
            <>
                <PageHeader style={{ textAlign: 'center' }}>Warranty Query</PageHeader>
                <div className={classes.Forms}>
                    <Form>
                        <Row><Col xs={12}>CheckBox</Col></Row>
                        <Row>
                            <Col sm={6}>
                                <Row>
                                    <Col xs={12}>
                                        <InputField
                                            controlId="showroomID"
                                            label="รหัสโชว์รูม"
                                            value={this.state.showroomID}
                                            placeholder=""
                                            changed={(event) => this.handleChange(event, "showroomID")}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <InputField
                                            controlId="showroomName"
                                            label="ชื่อโชว์รูม"
                                            value={this.state.showroomName}
                                            placeholder=""
                                            changed={(event) => this.handleChange(event, "showroomName")}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <StatusDropDown
                                            value={this.state.status}
                                            changed={(event) => this.handleChange(event, "status")}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row style={{ height: '20px', marginLeft: '12px' }}><ControlLabel>วันที่รับเอกสารจากโชว์รูม</ControlLabel></Row>
                                <Row>
                                    <DatePicker className={classes.DatePicker}
                                        selected={this.state.receiveDateFrom}
                                        isClearable={true}
                                        onChange={(date) => this.handleDateChange(date, "receiveDateFrom")}
                                        placeholderText="ตั้งแต่วันที่"
                                    />

                                    <DatePicker className={classes.DatePicker}
                                        selected={this.state.receiveDateTo}
                                        isClearable={true}
                                        onChange={(date) => this.handleDateChange(date, "receiveDateTo")}
                                        placeholderText="จนถึงวันที่"
                                    />
                                </Row>

                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <InputField
                                    controlId="saleID"
                                    label="Sale ID"
                                    value={this.state.saleID}
                                    placeholder=""
                                    changed={(event) => this.handleChange(event, "saleID")}
                                />
                            </Col>
                            <Col sm={6}>
                                <InputField
                                    controlId="saleName"
                                    label="ชื่อ Sale"
                                    value={this.state.saleName}
                                    placeholder=""
                                    changed={(event) => this.handleChange(event, "saleName")}
                                />
                            </Col>
                        </Row>
                        <Row><Col><div align="right" style={{padding: '0 5%'}}>
                            <Button>ค้นหา</Button>
                        </div></Col></Row>
                    </Form>
                </div>
                <QueryTable rows={this.state.queryResult} />
            </>
        );

    }
}

export default QueryPage;