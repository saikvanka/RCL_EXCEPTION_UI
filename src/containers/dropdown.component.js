import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

export default class SelectContainer extends React.Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const { selectedOption } = this.state;

        return (
            <div>
                <label>{this.props.drplabelname}</label>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                /></div>
        );
    }
}