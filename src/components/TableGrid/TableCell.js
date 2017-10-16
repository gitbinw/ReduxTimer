import React, {Component} from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class TableCell extends Component {
	render() {
		const props = this.props;
		
		switch(props.type) {
			case 'text' :
				return (
					<FormControl type="text" name={props.name} placeholder={props.placeholder} onChange={props.onChange} />
				);
				break;
			case 'select' :
				const options = props.options.map((opt, i) => {
					return (
						<option key={i} value={opt.value}>{opt.label}</option>
					);
				});
				return (
					<FormControl componentClass="select" name={props.name} onChange={props.onChange}>
						<option value="">{props.placeholder}</option>
						{options}
					</FormControl>
				);
				break;
			case 'combobox' :
				break;
		}
		
		return null;
	}
}