import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import autobind from 'autobind-decorator';
import SweetAlert from 'sweetalert-react';
import Swal from 'sweetalert2'
import Header from '../header/header.jsx';
import * as api from '../../api';

class Table extends Component {

	state = {
		file: {},
		removeStatus: false
	}

	componentDidMount() {
		this.call();
	}

	call() {
		api.showAll().then(result => {
			this.setState({
				file: result.data
			})
		})
	}

	@autobind
	removeItem(_id) {
		Swal({
		  	title: 'Are you sure remove this item ?',
		  	type: 'warning',
		  	showCancelButton: true,
		  	confirmButtonColor: '#3085d6',
		  	cancelButtonColor: '#d33',
		  	confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
		  	if (result.value) {
		  		api.removeId(_id).then(result => {
		  			Swal(
		  			  'Deleted!',
		  			  'Your file has been deleted.',
		  			  'success'
		  			)
		  			this.call();
		  		})
		  	}
		})
	}


	renderListData() {
		let {file} = this.state;
		console.log(file)
		if (file && file.length > 0) {
			return(	
				<tbody>
					{file.map((item, index) =>
						<tr key={index}>
							<td>{index+=1}</td>
							<td><span className="text-success-600">{item.tag}</span></td>
							<td><span className="text-success-600">{item.link}</span></td>
							<td>
								<span className="text-success-600">
									<a href="" target="_blank">
										{item.file ? <a href={`http://exam.ceosoftware.vn:4000/${item._id}`} target="_blank">View</a> : <Link to={`/${item._id}`}>View</Link>}
									</a>
								</span>
							</td>
							<td>
								<div onClick={this.removeItem.bind(this, item._id)}>
									<a href="#" className="btn bg-danger">Delete</a>
								</div>
							</td>
						</tr>
					)}
				</tbody>
			)
		}
	}

	render() {
		return(
            <div className="wrapper">
            	<Header />
				<div className="col-md-8 col-md-offset-2">
					<table className="table">
						<thead>
							<tr className="bg-teal-400">
								<th>#</th>
								<th>Tag</th>
								<th>Link Root</th>
								<th>Views</th>
								<th>Action</th>
							</tr>
						</thead>
						{this.renderListData()}
					</table>
				</div>
			</div>
		)
	}
}
export default Table;