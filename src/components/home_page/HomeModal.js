import React from 'react';
import ReactDOM from 'react-dom';


import './HomeModal.css'
import textGif from './images/BookChain-text-vid.gif'

const HomeModal = (props) => {
    return ReactDOM.createPortal(

        <>
            <div animate={{ scale: 1.25 }} className="home-page-modal" >
                <img src={textGif} height={200} width={600} alt="Welcome to BookChain" id="textSvg"/>

                <div className="row">
                    <div className="card col" style={{ width: '18rem' }}>
                        <div className="card-header">
                            <h5 className="card-title">Metamask Deployment</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Our app works with the help of Metamask Chrome extension. </p>
                            <button type="button" className="btn btn-success" id="metamask-btn">Know More</button>
                        </div>
                    </div>
                    <div className="card col" style={{ width: '18rem' }}>
                        <div className="card-header">
                            <h5 className="card-title">Application Demo </h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Click here to head on over to the demo appliciation page.</p>
                            <a href="http://localhost:3000/main"><button type="button" className="btn btn-dark" id="go-to-app-btn">Go to App</button></a>
                        </div>
                    </div>
                    <div className="card col" style={{ width: '18rem' }}>
                        <div className="card-header">
                            <h5 className="card-title">GitHub Repository</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Head over to the GitHub repo to understand the project better.</p>
                            <a href="https://github.com/Spirit-ofJoy/BookChain"><button type="button" className="btn btn-primary" id="github-btn">GitHub link</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </>,
        document.getElementById('modal-port')
    );
    
}

export default HomeModal;