import React from 'react';

export {TwoColumn, Column}

function TwoColumn(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            {props.children}
        </div>
    )
}

function Column(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            {props.children}
        </div>
    )
}