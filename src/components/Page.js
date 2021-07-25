import React from 'react';

import '../stylesheets/Page.css';

// var currentComponent = null;
class Page extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <p className="pageCredits">
                    Page created by Vanished (<a href="https://github.com/vanishedvan">GitHub</a>)
                    <br />
                    This website is not affiliated with Discord.
                </p>
            </React.StrictMode>
        );
    }
}
export default Page;
