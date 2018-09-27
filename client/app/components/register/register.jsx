import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router-dom';

import * as api from '../../api';

class Register extends Component {

    state = {
        errorEmail: null,
        errorPass: null,
        checkPass: null
    }

    @autobind
    validatePassword() {
        let password = this.passwordInput.value;
        if (!password || password.length < 5) {
            this.setState({
                errorPass: "Password must be valid"
            });
            return;
        }
        this.setState({
            errorPass: null
        });
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
            this.setState({
                errorEmail: "Email must be valid"
            });
            return;
        }
        this.setState({
            errorEmail: null
        });
    }


    // Popup hiển thị thông báo
    renderPopup() {
        return(
            <div className="ui-pnotify bg-success border-success ui-pnotify-fade-normal ui-pnotify-mobile-able ui-pnotify-move ui-pnotify-in ui-pnotify-fade-in" aria-live="assertive" aria-role="alertdialog" style="display: none; width: 300px; right: 20px; top: 20px;">
                <div className="brighttheme ui-pnotify-container brighttheme-notice ui-pnotify-shadow" role="alert" style="min-height: 16px;">
                    <div className="ui-pnotify-closer" aria-role="button" tabindex="0" title="Gần" style="cursor: pointer; visibility: hidden;"><span className="brighttheme-icon-closer"></span></div>
                    <div className="ui-pnotify-sticker" aria-role="button" aria-pressed="false" tabindex="0" title="Gậy" style="cursor: pointer; visibility: hidden;"><span className="brighttheme-icon-sticker" aria-pressed="false"></span></div>
                    <div className="ui-pnotify-icon"><span className="brighttheme-icon-notice"></span></div>
                    <h4 className="ui-pnotify-title">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Thông báo thành công</font>
                        </font>
                    </h4>
                    <div className="ui-pnotify-text" aria-role="alert">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">Kiểm tra tôi! </font>
                            <font style="vertical-align: inherit;">Tôi là một thông báo.</font>
                        </font>
                    </div>
                    <div className="ui-pnotify-action-bar" style="margin-top: 5px; clear: both; text-align: right; display: none;"></div>
                </div>
            </div>
        )
    }

    @autobind
    handleRegister(e) {
        e.preventDefault()
        let email    = this.emailInput.value;
        let password = this.passwordInput.value;

        api.register({email, password}).then(result => {
            console.log(result)
        })

    }


    render() {
        let {errorEmail, errorPass} = this.state;
        return (
            <div 
                data-component="Login"
                className="navbar-top login-container pace-done app-login"
            >
                {this.renderPopup}
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
                                            type="email" onBlur={this.validateEmail} className="form-control" placeholder="Email đăng nhập"
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
                                            type="password" onBlur={this.validatePassword} className="form-control" placeholder="Password"
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
                                            className="btn bg-pink-400 btn-block"
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