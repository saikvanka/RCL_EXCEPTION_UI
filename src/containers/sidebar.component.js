import React from "react";
import Sidebar from "react-sidebar";

import TableContainer from './table.component';
import HeaderContainer from './header.component';
import SelectContainer from './dropdown.component';
import CheckBoxContainer from './checkbox.component';
import DashboardChart from './dashboardChart.component';



class SidebarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    render() {
        return (
            <Sidebar
                sidebar={<div className="checkBox-container">
                    <CheckBoxContainer labelName={'Type'} />
                    <div style={{ margin: '15px 0px' }}><SelectContainer drplabelname={'Product'} /></div>
                    <div style={{ margin: '15px 0px' }}><SelectContainer drplabelname={'Category'} /></div>
                    <div style={{ margin: '15px 0px' }}><SelectContainer drplabelname={'Rule'} /></div>
                </div>}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{ sidebar: { background: "white", width: "200px" } }}
            >
                <span className="glyphicon glyphicon-filter" onClick={() => this.onSetSidebarOpen(true)}>
                    
        </span>
                <DashboardChart />
                <TableContainer />
            </Sidebar>
        );
    }
}


export default SidebarContainer;