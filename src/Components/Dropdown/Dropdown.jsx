import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class SpendingSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            spendItem: ''
        }
    }


    selectorStyle = {
        width: '100px',
        background: '#F6F3D7'
    }

    render() {
        return (
            <Select
                style={this.selectorStyle}
                value={this.state.spendItem}
                onChange={this.props.triggerParentUpdate}
                inputProps={{
                    name: 'spendItem'
                }}
            >
                <MenuItem value={"Food"}>Food</MenuItem>
                <MenuItem value={"House"}>House</MenuItem>
                <MenuItem value={"Car"}>Car</MenuItem>
            </Select>
        )
    }
}

export default SpendingSelector;