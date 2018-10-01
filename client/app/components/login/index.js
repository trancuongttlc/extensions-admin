import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './login.jsx';
import {login} from '../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch)
    };
};

export default withRouter(connect(mapDispatchToProps)(Login));