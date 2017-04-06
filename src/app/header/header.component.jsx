import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import HeaderList from './header-list.component.jsx';


class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            menu: [
                {
                    id: 1,
                    name: "Home",
                    link: "/"
                },
                {
                    id: 1,
                    name: "About",
                    link: "/about"
                },
                {
                    id: 1,
                    name: "Topics",
                    link: "/topics"
                }
            ]
        }

    };
    render() {
        return (

            <Router>
            <div>
                <nav className="navbar navbar-toggleable-md navbar-inverse bg-info" >
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

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
                
               
            </Router>

            
        )
    }
};

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)


export default Header;