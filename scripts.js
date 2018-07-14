import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main.jsx';
import AddBookPage from './Components/AddBookPage.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Entry = () => {
    return (
    <Router>
        <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/add-book" component={AddBookPage} />
        </div>
    </Router>
    )
}

ReactDOM.render(
    <Entry />,
    document.getElementById('app')
);