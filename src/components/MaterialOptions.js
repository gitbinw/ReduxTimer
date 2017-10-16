import React, {Component} from 'react';

class MaterialOptions extends from Component {
	render() {
		const props = this.props;
		const buttons = props.options.map((i, opt) => {
			return (
				<button id={opt.id} onClick={props.handleOptionClick}>{opt.name}</button>
			);
		});
		
		return (
			{buttons}
		);
	}
}

export default MaterialOptions;