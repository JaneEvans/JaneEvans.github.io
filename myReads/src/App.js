import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage';
import MainPage from './MainPage';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {
  state={
    bookList: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((bookList) => {
      this.setState({bookList})
    });
    
  }

  selectOption = (book, shelf) => {
    BooksAPI.update(book, shelf)

    BooksAPI.getAll().then((bookList) => {
      this.setState({bookList})
    })

  }


  render() {
    const {bookList} = this.state;

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
            bookList={bookList}
            selectOption={this.selectOption}
          />
        )}>
        </Route>

        <Route exact path='/search' render={() => (
          <SearchPage
            selectOption={this.selectOption}
            bookList={bookList} 
          />
        )}>
        </Route>
      </div>
    )
  }
}

export default BooksApp
