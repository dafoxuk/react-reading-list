import React from 'react';
import Header from './Header.jsx';
import axios from 'axios';
import goodReads from '../env.js';

export default class AddBookPage extends React.Component {
    
    constructor(){
        super();
        this.state = {
            books: []
        }
    }
    componentDidMount(){

    }

    render(){
        return (
            <div>
                <Header />
                <div>
                    <div className="container">
                        <p className="lead">Add Book</p>
                    </div>
                </div>
            </div>
        )
    }
}