import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router-dom';
import './style.css';

class Foodter extends Component {


    _onLogin() {

    }

    render() {
        return (
            <div 
                data-component="Login"
                className="navbar-top login-container pace-done app-login"
            >
                <div className="page-container">
                    <div className="page-content">
                        <div className="content-wrapper">
                            <form 
                                className="login-form"
                            >
                                <div className="panel panel-body">
                                    <div className="text-center">
                                        <div className="icon-object border-slate-300 text-slate-300"><i className="icon-reading"></i>
                                        </div>
                                        <h5 className="content-group">Đăng nhập hệ thống<small className="display-block">Nhập tài khoản của bạn dưới đây </small></h5>
                                    </div>

                                    <div className="form-group has-feedback ">
                                        <input 
                                            type="text" className="form-control" placeholder="Tên đăng nhập"
                                        />
                                        <div className="form-control-feedback">
                                            <i className="icon-user text-muted"></i>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <Link to="list">
                                            <button 
                                                className="btn bg-pink-400 btn-block"
                                            >
                                                Đăng nhập
                                                <i className="icon-circle-right2 position-right"></i>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Foodter