import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Mark Twain',
        imageUrl: '/images/marktwain.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Adventures of Huckleberry Finn','Life on the Mississippi','Roughing It']
    },
    {
        name: 'Joseph Conrad',
        imageUrl: '/images/josephconrad.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Heart of Darkness']
    },
    {
        name: 'J.K. Rowling',
        imageUrl: '/images/jkrowling.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Harry Potter and the Sorcerers Stone']
    },
    {
        name: 'Stephen King',
        imageUrl: '/images/stephenking.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['The Shining','IT']
    },
    {
        name: 'Charles Dickens',
        imageUrl: '/images/charlesdickens.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['David Copperfield','A Tale of Two Cities']
    },
    {
        name: 'William Shakespeare',
        imageUrl: '/images/williamshakespeare.jpg',
        imageSource: 'Wikimedia Commons',
        books: ['Hamlet','Macbeth','Romeo and Juliet']
    },
];

const getTurnData = (authors) => {
    const allBooks = authors.reduce((p,c,i) => {
        return p.concat(c.books);
    }, []);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books: fourRandomBooks,
        author: authors.find((author) => author.books.some((title) => title === answer))
    }
}

const state = {
    turnData: getTurnData(authors),
    highlight: 'correct'
}

function onAnswerSelected(answer) {
    const isCorrect = state.turnData.author.books.some((book) => book === answer);
    state.highlight = isCorrect ? 'correct' : 'wrong';
    render();
}

function render() {
    ReactDOM.render(<App {...state} onAnswerSelected={onAnswerSelected} />, document.getElementById('root'));
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
