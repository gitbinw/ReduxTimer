import React, {Component} from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import TableRow from './TableRow';
import MaterialData from '../MaterialData';

export default class TableGrid extends Component {
	constructor() {
		super();

		this.state = {
			popupLoading: false,
			popupLoaded: false,
			popupShow: false,
			popupTitle: '',
			popupData: []
		};
		
		this.close = this.close.bind(this);
		this.afterOpen = this.afterOpen.bind(this);
	}
	
	open(title) {
		this.setState({
			popupShow: true,
			popupTitle: title,
			popupLoaded: false,
			popupLoading: true,
			popupData: []
		});
	}
	afterOpen() {
		const md = new MaterialData();
		this.setState({
			popupLoading: true
		});

		md.getItemsBySupplier('supplier').then((jData) => {
			this.setState({
				popupLoading: false,
				popupLoaded: true,
				popupData: jData
			});
		}).catch((ex) => {
			this.setState({
				popupLoading: false,
				popupLoaded: true,
				popupData: []
			});
			console.log('parse error:', ex);
		});
	}
	close() {
		this.setState({
			popupShow: false
		});
	}
	
	onChange(col) {
		switch (col.field) {
			case 'Supplier' :
				if (col.value)	this.open(col.value);
				break;
		}
	}
	
	render () {
		return (
			<div>
				<h1>test table</h1>
				<table>
					<tbody>
						<TableRow columns={this.props.columns} onChange={ (col) => this.onChange(col) } />
					</tbody>
				</table>
				
				<Modal show={this.state.popupShow} onHide={this.close} onEntered={this.afterOpen}>
					<Modal.Header>
						<Modal.Title>{this.state.popupTitle}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.state.popupLoading && <div>Loading...</div>}
						
						{	
							this.state.popupLoaded &&
							<ListGroup>
								{	
									this.state.popupData.map((row, i) => { 
										return (<ListGroupItem key={i}>{row.description}</ListGroupItem>); 
									}) 
								}
							</ListGroup>
						}
						
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}