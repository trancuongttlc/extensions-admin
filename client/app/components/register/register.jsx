import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router-dom';
import Alert from 'react-s-alert';
import {NotificationContainer, NotificationManager} from 'react-notifications';


import * as api from '../../api';

class Register extends Component {

    state = {
        errorEmail: null,
        errorPass: null
    }

    @autobind
    validatePassword() {
        let password = this.passwordInput.value;
        if (password.length < 5) {
            return false;
        }
        return true;
    }

    validateEmailType(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    @autobind
    validateEmail() {
        let email  = this.emailInput.value;
        let vEmail = this.validateEmailType(email);
        if (!vEmail) {
            return false;
        }
        return true;
    }

    @autobind
    handleRegister(e) {
        e.preventDefault();
        let email     = this.emailInput.value;
        let password  = this.passwordInput.value;
        let vPassword = this.validatePassword();
        let vEmail    = this.validateEmail();
        if (!vEmail) {
            this.setState({
                errorEmail: "Email không hợp lệ."
            });
            return;
        }
        if (!vPassword) {
            this.setState({
                errorPass: "Mật khẩu phải lớn hơn 5 kí tự"
            });
            return;
        }
        this.setState({
            errorEmail: null,
            errorPass : null
        });

        api.register({email, password}).then(result => {
            let {status, message} = result;
            if (status) {
                alert("Đăng ký thành công");
                return;
            }
            alert("Có lỗi xảy ra, xin vui lòng thử lại");
        })
    }


    render() {
        let {errorEmail, errorPass} = this.state;
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
                                        <h5 className="content-group">Đăng ký tài khoản mới</h5>
                                    </div>

                                    <div className="form-group has-feedback ">
                                        <input 
                                            type="email" className="form-control" placeholder="Email đăng nhập"
                                            ref={(input) => { this.emailInput = input;}}
                                        />
                                        <div className="form-control-feedback">
                                            <i className="icon-user text-muted"></i>
                                        </div>
                                        {
                                            errorEmail ? <span className="help-block">{errorEmail}</span> : null
                                        }
                                    </div>

                                    <div className="form-group has-feedback ">
                                        <input 
                                            type="password" className="form-control" placeholder="Password" autocomplete="password"
                                            ref={(input) => { this.passwordInput = input;}}
                                        />
                                        <div className="form-control-feedback">
                                            <i className="icon-lock5 text-muted"></i>
                                        </div>
                                        {
                                            errorPass ? <span className="help-block">{errorPass}</span> : null
                                        }
                                    </div>

                                    <div className="form-group">
                                        <button 
                                            className="btn bg-pink-400 btn-block bg-warning"
                                            onClick={this.handleRegister}
                                        >
                                            Đăng ký
                                            <i className="icon-circle-right2 position-right"></i>
                                        </button>
                                    </div>
                                    <Link to="login">
                                        <p className="text-center"><a>Đã có tài khoản !</a></p>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;