import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Books from './Books';
import {Link} from 'react-router-dom';
// import escapeRegExp from 'escape-string-regexp';
// import sortBy from 'sort-by';

class SearchPage extends Component {
    state = {
        query: '',
        searchedBookList: []
    }

    getSearchedBookList = (query) => {
        if(query) {
            BooksAPI.search(query).then((searchedBookList) => {
                this.setState({searchedBookList});
            })
        }else {
            this.setState({searchedBookList: []});
        }
        
    }

    updateQuery = (query) => {
        this.setState({query});
        this.getSearchedBookList(query);
    }


    render() {
        const {query, searchedBookList} = this.state;
        const {bookList, selectOption} = this.props;

        let searchedBooks = searchedBookList.error ? [] : searchedBookList;

        console.log(searchedBookList);
        return (
        <div className="search-books">
            <div className="search-books-bar">

                <Link to='/' className="close-search" >
                    Close
                </Link>

                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by book title"
                        value={query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {searchedBooks.map(
                    
                    (searchedBook) => {
                        bookList.map(book => (
                            book.id === searchedBook.id ? searchedBook.shelf = book.shelf : ''
                        )) 
                        
                        return (
                                <li key={searchedBook.id}>
                                    <Books
                                        book={searchedBook}
                                        selectOption={selectOption}
                                    />
                                </li>
                            )
                    })
                }
              </ol>
            </div>
        </div>
        );
    }
}

export default SearchPage;