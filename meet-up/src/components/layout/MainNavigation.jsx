import { useContext } from "react";
import { Link } from "react-router-dom"
import FavoritesContext from "../../store/faviorites-context";
import classes from './MainNavigation.module.css'

// classes is just a JS object name to which all the css are added as properties
// module needs to be added so that react can know it belongs ro this component
function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li> 
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li> 
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li> 
                        <Link to='/favorites'>Favorites <span class={classes.badge}>{favoriteCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;