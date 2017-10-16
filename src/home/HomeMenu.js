import React from 'react';

export default class HomeMenu extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.image} />
                </div>
                <div>
                    {this.props.name}
                </div>
            </div>
        );
    }
}