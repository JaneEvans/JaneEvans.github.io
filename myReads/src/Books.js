import React, {Component} from 'react';

class Books extends Component {

    render() {
        const {book, selectOption} = this.props
        let ImgURL = book.imageLinks ? book.imageLinks.thumbnail: '';
        let Authors = book.authors ? book.authors: '';
        let bookShelf = book.shelf ? book.shelf : 'none';

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ImgURL})` }} />
                    <div className="book-shelf-changer">
                        <select onChange={(e) => {selectOption(book, e.target.value)}} defaultValue={bookShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{Authors}</div>
            </div>
        );
    }
}

export default Books;