import BootstrapTable from 'react-bootstrap-table-next';
import React, { Component } from 'react';

import classes from './QueryTable.module.css';

class QueryTable extends Component {
    state = {
        columns: [{
            dataField: 'key', //concat showroomID with receiveDate(ไม่ก็ใช้ running key มาเปน ID)
            text: 'key',
            hidden: true
        }, {
            dataField: 'showroomID',
            text: 'รหัสโชว์รูม',
            sort: true
        }, {
            dataField: 'showroomName',
            text: 'ชื่อโชว์รูม',
            sort: true
        }, {
            dataField: 'receiveDate',
            text: 'วันที่รับเอกสาร',
            sort: true
        }, {
            dataField: 'amount',
            text: 'Amount',
            sort: true
        }, {
            dataField: 'status',
            text: 'Status',
        }, {
            dataField: 'saleName',
            text: 'ชื่อ Sale',
        }],

    }

    rowEventHandler = (e, row, rowIndex) => {

    }

    render() {
        return (
            <div className={classes.Table}>
                <BootstrapTable
                    striped
                    hover
                    keyField='key'
                    data={this.props.rows}
                    columns={this.state.columns} />
            </div>
        );

    }
}

export default QueryTable;