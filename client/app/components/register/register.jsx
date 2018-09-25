import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router-dom';

class Register extends Component {

    state = {
        errorEmail: null,
        errorPass: null
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

    @autobind
    validateEmail() {
        let email = this.emailInput.value;
        if (!email || email.length < 5) {
            this.setState({
                errorEmail: "Email must be valid"
            });
            return;
        }
        this.setState({
            errorEmail: null
        });
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

                                    <div className="form-group has-feedback ">
                                        <input 
                                            type="password" className="form-control" placeholder="Confirm password"
                                        />
                                        <div className="form-control-feedback">
                                            <i className="icon-lock5 text-muted"></i>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <Link to="list">
                                            <button 
                                                className="btn bg-pink-400 btn-block"
                                            >
                                                Đăng ký
                                                <i className="icon-circle-right2 position-right"></i>
                                            </button>
                                        </Link>
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