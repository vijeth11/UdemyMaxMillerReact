import { createContext, useState } from "react";

/**
 * Context creates a react object/component with the initial state value passed as argument
 * the anchor tags of the context (ex: FavoritesContext.Provider) needs to be wrapped around the 
 * top most parent component in the heighrarchy of the children components to which the data is required.
 * So that children components can directly access them by this.context object in its class rather than getting it
 * passed through props from the top most parent component in the heighrarchy. 
 * The context object will be shared with all the children of the parent component and any change done to it will
 * effect all the children components which is using it.
 * 
 * Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
 * The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. 
 * One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.
 * 
 * Resources:-
 * https://reactjs.org/docs/context.html
 */
const FavoritesContext = createContext({
    favorities:[],
    totalFavorites:0,
    addFavorite: (x) => {},
    removeFavorite: (x) => {},
    itemIsFavorite: (x) => {}
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetUp){
        setUserFavorites(prevState => prevState.concat(favoriteMeetUp));
    }

    function removeFavoriteHandler(favoritesId){
        setUserFavorites(prevState => prevState.filter(meetup => meetup.id !== favoritesId));
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId);
    } 

    const context = {
        favorities: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value = {context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;