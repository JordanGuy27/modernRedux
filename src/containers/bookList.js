import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //makes sure the action flows through all of the reducers


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
            <li
                onClick={() => this.props.selectBook(book)}
                key={book.title} 
                className="list-group-item">
                {book.title}
            </li>
            )
        })
    }
                    
    render() {
        console.log(this.props)
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned will show up as props inside of booklist
    //glue between react and redux
    return {
        books: state.books
    };
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    //whenever select book is called the result will be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//Promote BookList from a component to a container, it needs to know about this new dispatch method (selecBook)
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);