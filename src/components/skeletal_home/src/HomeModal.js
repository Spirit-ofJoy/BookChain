import React from 'react';
import ReactDOM from 'react-dom';

import './HomeModal.scss'

const HomeModal = (props) => {
    return ReactDOM.createPortal(

        <>
            <div className="home-page-modal" >
                <h1>Welcome to BookChain</h1>

                <div className="row">
                    <div className="card col" style={{ width: '18rem' }}>
                        <div className="card-header">
                            <h5 className="card-title">Metamask Deployment</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Our app works with the help of Metamask Chrome extension. Know more about this by clicking below.</p>
                            <button type="button" className="btn btn-success" id="metamask-btn">Metamask</button>
                        </div>
                    </div>
                    <div className="card col" style={{ width: '18rem' }}>
                        <div className="card-header">
                            <h5 className="card-title">App Demo </h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Click here to head on over to the app page.</p>
                            <button type="button" className="btn btn-dark" id="go-to-app-btn">Go to App</button>
                        </div>
                    </div>
                    <div className="card col" style={{ width: '18rem' }}>
                        <div className="card-header">
                            <h5 className="card-title">GitHub Repository</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Head over to the GitHub repo to understand the project better.</p>
                            <button type="button" className="btn btn-primary" id="github-btn">GitHub link</button>
                        </div>
                    </div>
                </div>

            </div>
        </>,
        document.getElementById('modal-port')
    );
    
}

export default HomeModal;