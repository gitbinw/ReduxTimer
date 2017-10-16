import React from 'react';
import {connect} from 'react-redux';
import HomeMenu from './HomeMenu'

class Home extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome {this.props.userName}</p>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.user.userName
    }
}

export default connect(mapStateToProps)(Home);