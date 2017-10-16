import React, {Component} from 'react';
import TableCell from './TableCell';

export default class TableRow extends Component {
	render () {
		const columns = this.props.columns;
		const rows = columns.map((col, i) => {
			const opts = col.options != undefined ? col.options : '';
			return (
				<td key={i} id={i}>
					<TableCell type={col.type} name={col.field} options={opts} placeholder={col.title} onChange={ (e) => this.props.onChange({field: col.field, value: e.target.value}) } />
				</td>
			);
		});
		
		return (
			<tr>{rows}</tr>
		);
	}
}