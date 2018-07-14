import React from 'react';
import Header from './Header.jsx';
import BookIndex from './BookIndex.jsx';

export default class Main extends React.Component {

    render(){
        return (
            <div className="site">
                <Header />
                <div>
                    <div className="container">
                       <BookIndex />
                    </div>
                </div>
            </div>
        )
    }
}