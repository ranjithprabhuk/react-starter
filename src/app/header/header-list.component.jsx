import React from 'react';


class HeaderList extends React.Component {
    render() {
        return (
            <li className="nav-item active">
                <a className="nav-link" href="{this.props.data.link}">{this.props.data.name}</a>
            </li>
        )
    }
};

export default HeaderList;