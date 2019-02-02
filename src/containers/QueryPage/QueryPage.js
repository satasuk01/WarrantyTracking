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
        receiveDateFrom: null, //ถ้าวันเป็น null ให้เป็น วันแรกของ 2561
        receiveDateTo: null, //ถ้าวันเป็น null ให้เป็น ปัจจุบัน
        queryResult: [
            { key: 123, showroomID: 5555, showroomName: "Dummy Data", receiveDate: Date() }
        ]
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
    handleQuery() {

    }
    selectCardHandler = {
        onClick: (e, row, rowIndex) => {
            //console.log(this.props);
            console.log(row);
            //console.log(`clicked on row with index: ${rowIndex}`);
            //console.log(this.props.history);
            this.props.history.push({ pathname: '/approval/' + row.key });
        },
    }
    render() {
        return (
            <>
                <PageHeader style={{ textAlign: 'center' }}>Warranty Query</PageHeader>
                <div className={classes.Forms}>
                    <Form>
                        <div style={{ textAlign: 'center' }}><strong>กรุณาเลือกวันที่</strong></div>
                        <hr />

                        <Row style={{ height: '20px', marginLeft: '12px' }}><ControlLabel>วันที่รับเอกสารจากโชว์รูม</ControlLabel></Row>
                        <div>
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
                        </div>
                        <div align="right" style={{ padding: '0 5%' }}>
                            <Button>ค้นหา</Button>
                        </div>
                    </Form>
                </div>
                <QueryTable className={classes.Table} rows={this.state.queryResult} events={this.selectCardHandler} />
            </>
        );

    }
}

export default QueryPage;