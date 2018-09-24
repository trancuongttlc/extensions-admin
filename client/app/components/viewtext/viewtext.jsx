import React, {Component} from 'react';
import * as api from '../../api';
import Header from '../header/header.jsx';
class Viewtext extends Component {

	state = {
		data: {}
	}

	componentDidMount() {
		this._call()
	}

	_call() {
		let {params} = this.props.match;
		api.getId(params.id).then(result => {
			this.setState({
				data: result.data
			})
		})
	}

	render() {
		let {data} = this.state;
		return(
            <div className="card">
            	<Header/>
				<div className="card-header header-elements-inline col-md-8 col-md-offset-2">
					<h3>{data.text ? data.text : "Sorry! Không có đoạn văn bản nào đc lưu."}</h3>
				</div>
			</div>
		)
	}
}
export default Viewtext;