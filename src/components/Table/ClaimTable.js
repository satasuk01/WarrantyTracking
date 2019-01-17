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
    }];

    return (

        <div className={classes.Table}>
            <BootstrapTable
                striped
                hover
                keyField='name'
                //data={products}
                data={props.rows}
                columns={columns}
                rowEvents={props.events}
            />
        </div>

    )
};

export default claimTable;