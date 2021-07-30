import React from 'react';
import ReactDOM from 'react-dom';

import Page from './components/Page';
import Preview from './components/Preview';
import Input from './components/Input';

// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './other/reportWebVitals';

import './stylesheets/Preview.css';
import './stylesheets/Page.css';

// const RenderLoader = () => <p>Loading... Please wait.</p>;

// ---

ReactDOM.render(
    <React.StrictMode>
        <div className="pageContainer">
            <div className="pageInformation">
                {/* <svg className="pageIcon" aria-hidden="true" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"></path>
                </svg>
                <p className="pageTitle">Imagine a Place</p>
                <p className="pageDescription">...</p> */}
            </div>

            <div className="pageContent">
                <Preview />
                <Input />
            </div>
            <Page />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// serviceWorkerRegistration.register();
// reportWebVitals();
