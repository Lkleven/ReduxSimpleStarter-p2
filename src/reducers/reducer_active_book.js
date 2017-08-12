//all reducers get two arguments, the current state and action
//a reducer is only ever calld when an action occurs

//state argument is not application state, only the state this reducer is responsible for
//default state is null - if undefined, state = null. ES6 syntax
export default function(state = null, action){
	switch(action.type){
	case "BOOK_SELECTED":
		return action.payload;
	}

	return state;
}