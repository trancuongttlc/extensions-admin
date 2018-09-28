import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './Login';
import {login} from '../../actions';
console.log(login)

const mapStateToProps = (state) => {

    const {
        skin
    } = state;

    let {windowHeight} = skin;

    return {
        windowHeight
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch)
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));