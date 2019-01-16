import BootstrapTable from 'react-bootstrap-table-next';
import React from 'react';

import classes from './ClaimTable.module.css';

const claimTable = (props) => {
    const columns = [{
        dataField: 'name',
        text: 'เรียกคืนจาก'
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

    return (

        <div className={classes.Table}>
            <BootstrapTable
                striped
                hover
                keyField='name'
                //data={products}
                data={props.rows}
                columns={columns} />
        </div>

    )
};

export default claimTable;