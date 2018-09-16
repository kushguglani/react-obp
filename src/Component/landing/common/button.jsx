import React from 'react';

const button = (props)=>{
    return(
        <button type="button" onClick="{this.props.clickButton}">{props.name}</button>
    );
}

export default button;