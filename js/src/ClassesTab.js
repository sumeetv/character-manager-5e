import React, { Component } from 'react';

import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import ClassGateway from './gateways/ClassGateway'

import './ClassesTab.css';

class ClassesTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentClass: null
        };
    }

    selectClass(eventKey) {
        this.setState({
            currentClass: eventKey
        });
    }

    renderAvailableClasses() {
        let classData = ClassGateway.getClasses();
        classData.sort(function(a, b) {
            return a.name > b.name;
        });
        let menuItems = [];
        for (let menuKey in classData) {
            menuItems.push(
                <MenuItem
                    key={classData[menuKey].id.toString()}
                    eventKey={classData[menuKey]}>
                    {classData[menuKey].name}
                </MenuItem>
            )
        }
        return (
            <DropdownButton
                id="class-selector"
                title="Select Class"
                onSelect={this.selectClass.bind(this)}>
                 {menuItems}
            </DropdownButton>
        );
    }

    renderClassesHeader() {
        let classTitle = "None";
        if (this.state.currentClass !== null) {
            classTitle = this.state.currentClass.name;
        }
        return (
            <div className="Classes-header">
                <div className="Classes-title">
                    {"Current Class: " + classTitle}
                </div>
                <div className="Classes-selector">
                    {this.renderAvailableClasses()}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="Classes-tab">
                {this.renderClassesHeader()}
            </div>
        );
    }
}

export default ClassesTab;
