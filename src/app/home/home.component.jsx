import React from 'react';
import HeaderList from './header-list.component.jsx';

class Header extends React.Component {

    constructor(){
        super();

        this.state ={
            menu:[
                {
                    id:1,
                    name:"Home",
                    link:"Home"
                },
                {
                    id:1,
                    name:"Home",
                    link:"Home"
                },
                {
                    id:1,
                    name:"Home",
                    link:"Home"
                }
            ]
        }

    };
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded" >
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">React Starter</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {this.state.menu.map((list,i) => <HeaderList key = {i} data= {list} />)}
                    </ul>
                </div>
            </nav >
        )
    }
};

export default Header;