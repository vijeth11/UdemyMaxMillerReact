import { useContext } from "react";
import FavoritesContext from "../store/faviorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(){
    /**
     * useContext hook takes the initial context object which was created using createContext as an argument.
     * and then returns the current context object which can be used to access the data and manipulate the dom.
     */
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p> You got no faviorites yet. Start adding some?</p>;
    }else{
        content = <MeetupList meetups = { favoritesCtx.favorities }/>;
    }
    return(
    <section>
        <h1> My Favorites</h1>
        {content}
    </section>)
}

export default FavoritesPage;