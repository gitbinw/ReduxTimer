import React from 'react';
import ReactDom from 'react-dom';

class MaterialServiceType extends React.Component {
	constructor() {
		super();
	}

	render() {
		const props = this.props;
		const options = props.options.map((i, val) => {
			return (
				<option value={val}>{val}</option>
			);
		});
		
		return (
			<select name="ServiceType" onChange={props.onChange}>
				<option value=""></option>
				{options}
			</select>
		);
	}
}

export default MaterialServiceType;