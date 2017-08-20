import React, { Component } from 'react';

import Tab from 'react-bootstrap/lib/Tab';
import Tabs from 'react-bootstrap/lib/Tabs';

import CharacterTab from './CharacterTab.js';
import ClassesTab from './ClassesTab.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Old Man Sumeet's D&D Thing</h2>
                </div>
                <Tabs id="app-tab-selector" defaultActiveKey="Classes">
                    <Tab eventKey="Characters" title="Characters">
                        <CharacterTab />
                    </Tab>
                    <Tab eventKey="Classes" title="Classes">
                        <ClassesTab />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default App;
