import { Route, Switch } from "react-router";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation"; 
import Layout from "./components/layout/Layout";
//Route Component renders everything it matches in the path
//ex: /favorites path will match routes with path / as well as /favorites so it will
//render both AllMeetUpPage and FavoritesPage one below other

//Switch renders first matched path so it is mandatory to order the paths form complex to generic or add exact attribute to Route
function App() {
  return (
    <Layout>
      <Switch>      
        <Route path='/new-meetup' exact={true}>
          <NewMeetUpPage/>
        </Route>
        <Route path='/favorites'>
          <FavoritesPage/>
        </Route>
        <Route path='/'>
          <AllMeetupsPage/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
