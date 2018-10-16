import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

const Hero = () => {
    return (<div className="row">
                <div className="jumbotron col-10 offset-1">
                    <h1>Author Quiz</h1>
                    <p>Select the book by the author shown</p>
                </div>
            </div>);
}

const Book = ({title, onClick}) => {
    return (<div className="answer" onClick={() => {onClick(title);}}>
                <h4>{title}</h4>
            </div>);
}

const Turn = ({author, books, highlight, onAnswerSelected}) => {
    function highlightToBgColor(highlight) {
        const mapping = {
            none: '',
            correct: 'green',
            wrong: 'red'
        };
        return mapping[highlight];
    }


    return (<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
                <div className="col-4 offset-1">
                    <img src={author.imageUrl} className="author-image" alt="Author" />
                </div>
                <div className="col-6">
                    {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
                </div>
            </div>);
}

const Continue = () => { return null }

const Footer = () => {
    return (<div id="footer" className="row">
                <div className="col-12">
                    <p className="text-muted credit">All images are from Wikimedia Commons and are in the public domain.</p>
                </div>
            </div>);
}

const AuthorQuiz = ({turnData, highlight, onAnswerSelected}) => {
    return (
        <div className="container-fluid">
            <Hero />
            <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
            <Continue />
            <Footer />
        </div>
    );
}

export default AuthorQuiz;
