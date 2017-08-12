export function selectBook(book){
	//selectBook is an ActionCreator, it needs to return an action - an object with a type property
	return {
		type: "BOOK_SELECTED",
		payload: book
	};
}


//make sure this action creator is wired up to redux