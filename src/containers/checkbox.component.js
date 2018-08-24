import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';


export default class CheckBoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: []
        };
    }

    componentDidMount() {
        // Add orange and remove watermelon after 5 seconds
        setTimeout(() => {
            this.setState({
                fruits: []
            });
        }, 5000);
    }

    render() {
        // the checkboxes can be arbitrarily deep. They will always be fetched and
        // attached the `name` attribute correctly. `value` is optional
        return (
            <div>
                <label>{this.props.labelName}</label>
                <CheckboxGroup
                    checkboxDepth={2} // This is needed to optimize the checkbox group
                    name="fruits"
                    value={this.state.fruits}
                    onChange={this.fruitsChanged}>

                    <div><Checkbox value="dq" /> DQ</div>
                    <div><Checkbox value="technical" /> Technical</div>
                    <div><Checkbox value="category" /> Categories</div>
                </CheckboxGroup>
            </div>
        );
    }

    fruitsChanged = (newFruits) => {
        this.setState({
            fruits: newFruits
        });
    }

};
