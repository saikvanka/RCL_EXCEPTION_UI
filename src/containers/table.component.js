import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "../utils/utils";
import { TableComponent } from '../components/table.component';
import { Grid, Row, Col } from 'react-bootstrap';

export default class TableContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            data: makeData()
        };
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <Row className="show-grid">
                    <Col xs={12} style={{paddingTop:'20px'}}>
                        <TableComponent data={data} />
                    </Col>
                </Row>
                <br />
            </div>
        );
    }
}