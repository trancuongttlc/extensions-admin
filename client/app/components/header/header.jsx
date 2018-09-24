import React, {Component} from 'react';
import './style.css';

class Header extends Component {
    
    render() {
        return (
            <div 
                data-component="Header"
                className="page-header page-header-inverse col-md-12"
            >
                <div className="navbar navbar-inverse navbar-transparent">
                    <div className="navbar-collapse">
                        <h4 className="card-title col-md-6">CEO Read News</h4>
                        
                    </div>
                </div>
            </div>
        );
    }
}
// <p className="text-right col-md-6 style-logout">Logout</p>
export default Header;