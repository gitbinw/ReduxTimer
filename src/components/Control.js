import React, {Component} from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

export class DropDown extends Component {
	render() {
		const arrOpts = this.props.options ? this.props.options : [];
		const options = arrOpts.map((opt, i) => {
			let myValue = '';
			let myLabel = '';
			if (typeof(opt) == 'object') {
				myValue = opt.value;
				myLabel = opt.label;
			} else {
				myValue = opt;
				myLabel = opt;
			}
			return (
				<option key={i} value={myValue}>{myLabel}</option>
			)
		});
		return (
			<FormGroup validationState={this.props.validState} style={this.props.style}>
				<ControlLabel>{this.props.label}</ControlLabel>
				<FormControl componentClass="select" name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
					{options}
				</FormControl>
				{this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
			</FormGroup>
		);
	}
}

export function FieldGroup({ id, label, help, validState, ...props }) {
  	return (
		<FormGroup controlId={id} bsStyle={props.bsStyle} validationState={validState}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props} />
			{help && <HelpBlock>{help}</HelpBlock>}
		</FormGroup>
  	);
}

export class Validator {
	constructor() {}

	validationFields(arrValidFields) {
		const fields = [
			{field: 'Description', type: '', reg: '', required: true, message: 'Description is required.'},
			{field: 'Supplier', type: '', reg: '', required: true, message: 'Supplier is required.'},
			{field: 'SupplierSelected', type: '', reg: '', required: true, message: 'Please select a supplier.'},
			{field: 'Item', type: '', reg: '', required: true, message: 'Item Name is required.'},
			{field: 'Tenant', type: '', reg: '', required: true, message: 'Tenant is required.'},
			{field: 'MaterialType', type: '', reg: '', required: true, message: 'Please select a Material Type.'},
			{field: 'StockId', type: '', reg: '', required: true, message: 'Please select a stock.'},
			{field: 'Tower', type: '', reg: '', required: true, message: 'Tower is required.'},
			{field: 'Level', type: '', reg: '', required: true, message: 'Level is required.'},
			{field: 'Location', type: '', reg: '', required: true, message: 'Location is required.'},
			{field: 'Total', type: 'decimal', reg: /^\d+(\.)?(\d)*$/, required: true, message: 'A valid total cost is required.'},
			{field: 'Price', type: 'decimal', reg: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/, required: true, message: 'A valid price is required.'},
			{field: 'Quantity', type: 'number', reg: /^[1-9]+$/, required: true, message: 'A valid quantity is required.'},
			{field: 'ServiceType', type: '', reg: '', required: true, message: 'Please select a Service Type.'}
		];

		let toValidFields = [];
		for(let i in fields) {
			let f = fields[i];
			if (arrValidFields.indexOf(f.field) !== -1) {
				toValidFields.push(f);
			}
		}

		return toValidFields;
	}

	validate(myfields, data) {
		const fields = this.validationFields(myfields);
		const maxLen = fields.length;
		let errors = {};
		let isValid = true;

		for(let i=0; i<maxLen; i++) {
			let f = fields[i];
			let v = data[f.field] ? data[f.field] : '';
			let flag = false;
			
			if (!v) {
				if (f.required) {
					flag = true;
				}

			} else if (f.reg && !f.reg.test(v)) {
				flag = true;

			} else if (f.type) {
				switch(f.type) {
					case 'number':
						if (isNaN(v)) flag = true;
						break;
				}
			}
		
			if (flag) {
				errors = Object.assign(errors, { [f.field] : {status: 'error', message: f.message} } );
				isValid = false;
			}
		}
		
		if (isValid === true) return true;
		else return errors;
	}

	
}
