export function selectBook(book) {
    //selectBook is an action creator, it needs to return an action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

//action always contains a type and sometimes a payload with data