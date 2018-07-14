import React from 'react';
import axios from 'axios';
import fastXmlParser from 'fast-xml-parser';
import goodReads from '../env.js';

export default class BookIndex extends React.Component {

    constructor(){
        super();
        this.state = {
            isLoading: true,
            books: []
        };
    }

    componentDidMount(){
        const url = 'https://www.goodreads.com/review/list/84167916.xml?key=' + goodReads.key;
        axios('http://query.yahooapis.com/v1/public/yql', {
            method: 'GET',
            params: {
                q: "select * from xml where url=\"" + url + "\"",
            }
        }
        ).then( (response) => {
            if (fastXmlParser.validate(response.data) !== true) {//optional
                return;
            }
            const tObj = fastXmlParser.getTraversalObj(response.data);
            const jsonObj = fastXmlParser.convertToJson(tObj);
            console.log(jsonObj);
            this.setState({ isLoading: false, books: jsonObj.query.results.GoodreadsResponse.books.book})
        }).catch( (error) => {
            console.log(error)
        })
    }

    render(){
        const { isLoading, books } = this.state;

        if(isLoading){
            return (
                <p>Loading...</p>
            );
        }
        return (
            <div className="row">
                {
                    books.map( (book, index) => {
                        return (
                            <div key={index} className="card col-3">
                                <img className="card-img-top" src={book.image_url} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.description.substring(0, 100)}</p>
                                    <a href={book.url} className="btn btn-primary">Goodreads</a>
                                </div>
                            </div>
                        )
                    } )
                }
            </div>
        )
    }
}