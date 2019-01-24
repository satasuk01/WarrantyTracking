import BootstrapTable from 'react-bootstrap-table-next';
import React, { Component } from 'react';

import classes from './QueryTable.module.css';
import '../Table.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';


class QueryTable extends Component {

    state = {
        columns: [{
            dataField: 'key', //concat showroomID with receiveDate(ไม่ก็ใช้ running key มาเปน ID)
            text: 'key',
            hidden: true
        }, {
            dataField: 'showroomID',
            text: 'รหัสโชว์รูม',
            filter: textFilter({style:{width:'100px'}, placeholder:'รหัสโชว์รูม'}),
            sort: true
        }, {
            dataField: 'showroomName',
            text: 'ชื่อโชว์รูม',
            filter: textFilter({style:{width:'120px'}, placeholder:'ชื่อโชว์รูม'}),
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
            filter: textFilter({style:{width:'75px'}}),
            text: 'Status',
        }, {
            dataField: 'saleName',
            filter: textFilter({style:{width:'150px'}, placeholder:'ชื่อ Sale'}),
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
                    columns={this.state.columns}
                    rowEvents={this.props.events}
                    filter={filterFactory()} />
            </div>
        );

    }
}

export default QueryTable;