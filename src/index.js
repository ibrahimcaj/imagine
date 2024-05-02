import React from 'react';
import ReactDOM from 'react-dom';

import Page from './components/Page';
import Preview from './components/Preview';
import Input from './components/Input';

import './stylesheets/Preview.css';
import './stylesheets/Page.css';

ReactDOM.render(
    <React.StrictMode>
        <div className="pageContainer">
            <div className="pageContent">
                <Preview />
                <Input />
            </div>
            <Page />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
