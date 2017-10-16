import React, { Component } from 'react';
import MaterialServiceType from 'MaterialServiceType'

class MaterialForm extends Component {
	handleChange(e) {
		
	}
	
	render() {
		return (
			<form>
				<MaterialServiceType options={this.props.serviceTypes} onChange={ (e) => this.handleChange(e) } />
			</form>
		);
	}
}

export default MaterialForm;