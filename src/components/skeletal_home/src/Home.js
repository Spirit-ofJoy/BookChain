import React, {Component}  from 'react';
import './Home.scss';
import Loading from './Loading';
import HomeModal from './HomeModal';

class Home extends Component {


  render() {
    return (
      <div className="Home-page">
        <Loading time={3600 * 36} />
        <HomeModal  />
      </div>
    );
  }
  
}

export default Home;
