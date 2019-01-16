import BootstrapTable from 'react-bootstrap-table-next';
import React from 'react';

import classes from '../ClaimTable.module.css';

const incentiveTable = (props) => {
    const columns = [{
        dataField: 'cardType',
        text: 'บัตรลงทะเบียน'
    },
    {
        dataField: 'amount',
        text: 'จำนวนใบ'
    }, {
        dataField: 'price',
        text: 'ราคาใบละ',
    }, {
        dataField: 'total',
        text: 'รวม',
        sort: true
    }];

    const assignedClass = [classes.Table, classes.marginTop].join(' ');

    return (
        
        <div className={assignedClass}>
            <BootstrapTable
                striped
                hover
                keyField='cardType'
                //data={products}
                data={props.rows}
                columns={columns} />
        </div>

    )
};

export default incentiveTable;